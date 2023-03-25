import { createGlobalStyle } from "styled-components";

export const colours = {
  navy: "#2F374B",
  green: "#1EB88D",
  white: "#FFFFFF",
  grey: "#222A3E",
  primary5: "#F4FBF9",
  dark: "#191b1f",
  grey: "#1f2128",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #191b1f;
    font-family: 'Roboto Mono', monospace;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bolder;

  }
  .wrapper {
    width: 60vw;
  }
  a {
    text-decoration: none;
    color: white
  }
`;

export default GlobalStyle;
