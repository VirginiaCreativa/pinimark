import { createGlobalStyle } from 'styled-components';
import Variables from './VariableStyled';

const GlobalStyled = createGlobalStyle`
  body {
    background: ${Variables.body};
    font-family:  'Poppins', sans-serif !important;
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
    caret-color: ${Variables.blue1};
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
      background-color: ${Variables.blue1};
      color: #fff;
    }
  }
`;

export default GlobalStyled;
