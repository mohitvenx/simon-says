import { createGlobalStyle } from 'styled-components';
import background from '../images/background.png';

const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    overflow-x: hidden;
    font-size: 1.6rem;
    font-family: 'Amatic SC', cursive, sans-serif;
    color: #fff;
    background: #000;
    background-image: url(${background});
    background-size: contain;
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }

  body::-webkit-scrollbar {
    width: 0.5em;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  button {
    outline: none!important;
  }
`;

export default GlobalStyle;
