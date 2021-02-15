import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';
import Search from '../../components/Search/Search';
import Menus from './Menus/Menus';

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
      <Search>search</Search>
      <Menus />
    </HeaderStyled>
  );
};

export default Header;
