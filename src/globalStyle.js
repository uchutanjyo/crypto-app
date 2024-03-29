import { createGlobalStyle } from "styled-components";

export const colours = {
  navy: "#2F374B",
  green: "#03dc28",
  white: "#FFFFFF",
  grey: "#222A3E",
  primary5: "#F4FBF9",
  dark: "#191b1f",
  red: "#bf1236",
  grey: "#1f2128",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #191b1f;
    /* font-family: 'Roboto Mono', monospace; */
    font-family: 'Roboto Mono', sans-serif;
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bolder;

  }
  .wrapper {
    width: 65vw;
    @media (max-width: 1400px) {
    width: 98vw;
  }
  @media (max-width: 700px) {
    width: 100vw;
  }
  }
  a {
    text-decoration: none;
    color: white
  }
`;

export default GlobalStyle;
