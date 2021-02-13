import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/LogoIcon';
import Search from '../../components/Search/Search';

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
      <div>admin</div>
    </HeaderStyled>
  );
};

export default Header;
