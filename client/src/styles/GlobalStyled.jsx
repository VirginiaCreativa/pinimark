import { createGlobalStyle } from 'styled-components';
import Variables from './VariableStyled';

const GlobalStyled = createGlobalStyle`
  body {
    font-family:  'Poppins', sans-serif !important;
    background: ${Variables.body};
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
    color: ${Variables.black};
    letter-spacing: -1px;
  }
  p,
  li,
  abbr {
    color: ${Variables.black};
    font-weight: 300;
    font-size: 0.9rem;
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
      color: #fff;
      background-color: ${Variables.blue1};
    }
  }
`;

export default GlobalStyled;
