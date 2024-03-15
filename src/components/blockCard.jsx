import styled, { keyframes } from 'styled-components';
import MasterClass from './MasterClass';

// Define the rotation animation
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const BigCardContainer = styled.div`
  position: relative;
  align-items: center;
  background: radial-gradient(
    50% 70% at 49.7% 100%,
    rgba(4, 46, 119, 0.8) 0%,
    hsl(218, 32%, 8%) 100%
  );
  border-radius: 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;
  width: 80%;
  max-width: 1500px;
  margin: 0 auto;
`;

const StyledSVG = styled.svg`
  position: absolute;
  font-size: 10px;
  letter-spacing: 1px;
  word-spacing: 5px;
  top: -40px;
  left: -40px; 
  fill: #9a9eb5; 
  width: 100px; 
  height: 100px; 
  opacity: 60%;
  animation: ${rotateAnimation} 14s linear infinite; 
`;


// eslint-disable-next-line react/prop-types
export default function VideoCreatorComponent({ header, title1, text1, title2, text2, svgVisible = true }) {
    return (
        <BigCardContainer className="border border-x-blue-600 border-y-gray-400 border-xl  border-opacity-30">
            {svgVisible && <StyledSVG
                className="transform-origin-center-center snipcss-N6MtX"
                style={{
                    fontFamily: "Lexend Zetta",
                    willChange: "transform",
                    transform: "rotate(18.4752deg)"
                }}
                viewBox="0 0 100 100"
                overflow="visible"
            >
                <path
                    id="curve-wnxkz4"
                    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                    strokeWidth="none"
                    fill="transparent"
                    style={{ display: "none" }}
                ></path>
                <text>
                    <textPath
                        href="#curve-wnxkz4"
                        startOffset="0"
                        dominantBaseline="hanging"
                        id="style-NxGlk"
                        className="style-NxGlk"
                    >
                        ✦ HISTORY WRITERS ✦ KEEPERS
                    </textPath>
                </text>
            </StyledSVG>
            }
            <div className="pt-5">
                <MasterClass title={header} color="gray" />
                <h1 className="text-white text-center text-4xl my-5">{title1}</h1>
                <p className="text-gray-400 text-center text-base px-4 md:px-20 lg:px-64">
                    {text1}
                </p>
                {title2 && <h1 className="text-white text-center text-4xl mt-16 mb-6">{title2}</h1>}
                {text2 && <p className="text-gray-400 text-center text-base px-4 md:px-20 lg:px-64">{text2}</p>}
            </div>
        </BigCardContainer>
    );
}