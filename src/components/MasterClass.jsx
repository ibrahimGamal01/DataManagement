import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Lexend Zetta', sans-serif; /* Apply Lexend Zetta font */
}
`;

const Masterclass = styled.div`
  --border-bottom-width: 1px;
  --border-color: rgba(148, 177, 240, 0.07);
  --border-left-width: 1px;
  --border-right-width: 1px;
  --border-style: solid;
  --border-top-width: 1px;
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
  width: 150px;
  will-change: var(--framer-will-change-override, transform);
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

const H3 = styled.h3`
  margin: 0;
  font-family: 'Lexend Zetta', sans-serif; /* Apply Lexend Zetta font */
  font-style: var(--framer-font-style, normal);
  font-weight: 500;
  color: white;
  font-size: 2rem;
  font-size: calc(
    var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1)
  );
  letter-spacing: var(--framer-letter-spacing, 0);
  text-transform: var(--framer-text-transform, none);
  text-decoration: var(--framer-text-decoration, none);
  line-height: var(--framer-line-height, 1.2em);
  text-align: var(--framer-text-alignment, start);
`;

export default function MasterClass({title}) {
    const [text, setText] = useState(title);

    return (
        <>
        <GlobalStyle />
            <Masterclass>
                <RichTextContainer>
                    <H3>{text}</H3>
                </RichTextContainer>
            </Masterclass>
        </>
    );
}
