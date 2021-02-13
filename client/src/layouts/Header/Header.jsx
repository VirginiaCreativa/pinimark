import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;
const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <div>search</div>
      <div>admin</div>
    </HeaderStyled>
  );
};

export default Header;
