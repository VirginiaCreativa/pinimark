import { createGlobalStyle } from 'styled-components';
import Variables from './VariableStyled';

const GlobalStyled = createGlobalStyle`
  body {
    background: ${Variables.body};
    font-family:  'Quicksand', sans-serif !important;
  }
  a {
    text-decoration: none !important;
    :hover {
      text-decoration: none !important;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
    letter-spacing: -1px;
    color: ${Variables.black};
  }
  p,
  li,
  abbr {
    color: ${Variables.black};
    font-size: 0.9rem;
    font-weight: 300;
  }
  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }
 
  input {
    caret-color: ${Variables.blue};
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  input,
  label,
  li,
  span {
    ::selection {
      background-color: ${Variables.gray_light};
      color: ${Variables.blueCol};
    }
  }

  .activeBtnFilter {
    background-color: ${Variables.gray_2};
    color: ${Variables.gray_dark};
  }

  .loader,
  .loader::after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  .loader {
    position: relative;
    transform: translateZ(0);
    margin: 60px auto;
    border-top: 1.1em solid rgba(127, 143, 166, 0.2);
    border-right: 1.1em solid rgba(127, 143, 166, 0.2);
    border-bottom: 1.1em solid rgba(127, 143, 166, 0.2);
    border-left: 1.1em solid #7f8fa6;
    animation: load8 1.1s infinite linear;
    text-indent: -9999em;
    font-size: 10px;
    -webkit-nimation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .container {
    padding: 40px 0;
  }
`;

export default GlobalStyled;
