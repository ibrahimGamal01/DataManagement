import { useState, useEffect } from "react";
import styled from "styled-components";

const Masterclass = styled.div`
  background: radial-gradient(
    38.5% 50% at 50% 100%,
    rgba(9, 87, 165, 0.5) 0%,
    rgba(182, 209, 237, 0.1) 100%
  );
  border-radius: 20px;
  flex: none;
  height: 32px;
  overflow: hidden;
  position: relative;
  width: ${(props) => props.width || "80px"};;
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

export default function IconContainer({ title, color }) {
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
    <Masterclass>
      <RichTextContainer>
        {/* <H3 color={color}>
          {text}
        </H3> */}
      </RichTextContainer>
    </Masterclass>
  );
}
