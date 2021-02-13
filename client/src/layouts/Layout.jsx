import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 90vh;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <header>logo</header>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default Layout;
