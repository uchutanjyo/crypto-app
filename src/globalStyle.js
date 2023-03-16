import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: white
  }
`;
 
export default GlobalStyle;