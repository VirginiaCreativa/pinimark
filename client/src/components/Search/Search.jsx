import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const SearchStyled = styled.div`
  position: relative;
`;

const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 5px;
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
const InputStyled = styled.input`
  width: 15vw;
  padding: 6px 40px 6px 40px;
  font-size: 0.9rem;
  text-align: center;
  background-color: ${Variables.grey0};
  border: 0;
  border-radius: 100px;
`;

const Search = () => {
  return (
    <SearchStyled>
      <Button type="button">
        <i className="bx bx-search"></i>
      </Button>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
      />
    </SearchStyled>
  );
};

export default Search;
