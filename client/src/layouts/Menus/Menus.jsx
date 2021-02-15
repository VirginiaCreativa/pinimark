import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const MenuStyled = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: transparent;
  border: 0;
  .bx {
    color: ${Variables.grey3};
    font-size: 18px;
    &:hover {
      color: ${Variables.blue1};
    }
  }
`;

const Menus = () => {
  return (
    <MenuStyled>
      <Button type="button">
        <i class="bx bx-bookmark"></i>
      </Button>
      <Button type="button">
        <i class="bx bx-user"></i>
      </Button>
    </MenuStyled>
  );
};

export default Menus;
