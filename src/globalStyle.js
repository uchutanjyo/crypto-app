import { createGlobalStyle } from 'styled-components';
 
export const colours = {
  navy: "#2F374B",
  green: "#1EB88D",
  white: "#FFFFFF",
  grey: "#222A3E",
  primary5: "#F4FBF9",
  grey: "#1f2128",
};


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    color: whitesmoke
  }
  a {
    text-decoration: none;
    color: white
  }
`;
 
export default GlobalStyle;