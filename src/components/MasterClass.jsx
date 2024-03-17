import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';

const Masterclass = styled.div`
  font-family: 'Lexend Zetta', sans-serif;
  background: radial-gradient(
    38.5% 50% at 50% 100%,
    rgba(9, 87, 165, 0.5) 0%,
    rgba(182, 209, 237, 0.1) 100%
  );
  border-radius: 33px;
  flex: none;
  height: 32px;
  overflow: hidden;
  position: relative;
  width: ${(props) => props.width || "200px"};;
  margin: auto !important;
`;

const RichTextContainer = styled.div`
  flex: none;
  height: auto;
  left: 50%;
  position: absolute;
  top: 52%;
  transform: translate(-50%, -50%);
  white-space: pre;
  width: auto;
`;

const H3 = styled.h1`
  margin: 0;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: small;
  color: ${(props) => props.color || "white"};
`;

// eslint-disable-next-line react/prop-types
export default function MasterClass({ title, color }) {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState(title);

  useEffect(() => {
    // Importing the font dynamically
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css?family=Lexend+Zetta&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    return () => {
      // Cleanup: remove the dynamically added font link when the component unmounts
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Masterclass>
          <RichTextContainer>
            <H3 color={color}>
              {text}
            </H3>
          </RichTextContainer>
        </Masterclass>
      </motion.div>

    </>


  );
}
