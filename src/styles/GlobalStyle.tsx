import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import variables from './variables';
import NanumSquareNeo from '../assets/fonts/NanumSquareNeo-bRg.ttf';

const GlobalStyle = createGlobalStyle` 
  ${variables}
  ${reset}
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'nanumSquareNeo';
    src: url(${NanumSquareNeo}) format('truetype');
  }

  html, body {
    font-size: var(--font-size-m);
    height: 100%;
    font-family: 'nanumSquareNeo';
  }

  a {
    text-decoration: none;
    color: inherit;
    font-family: 'nanumSquareNeo';
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'nanumSquareNeo';
  }
  
  input {
    border: none;
    outline: none;
    font-family: 'nanumSquareNeo';
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
