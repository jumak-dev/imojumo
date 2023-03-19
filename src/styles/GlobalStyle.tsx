import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import variables from './variables';

const GlobalStyle = createGlobalStyle` 
  ${variables}
  ${reset}
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    font-size: var(--font-size-md);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
    background-color: transparent
  }
  
  input {
    border: none;
    outline: none;
  }
`;

export default GlobalStyle;
