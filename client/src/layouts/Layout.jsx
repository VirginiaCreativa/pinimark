import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Wrapper = styled.div`
  min-height: 90vh;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
