import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', 'sans-serif';
  }

  html, body {
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    background: #ff9c00;
  }
`;

export default GlobalStyles;
