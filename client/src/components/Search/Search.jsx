import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const SearchStyled = styled.div`
  position: relative;
  box-icon[name='search'] {
    position: absolute;
    top: 4px;
    right: 10px;
  }
`;
const InputStyled = styled.input`
  border: none;
  border-radius: 100px;
  background-color: ${Variables.grey0};
  padding: 8px 16px;
  width: 20vw;
  font-size: 0.8rem;
`;

const Search = () => {
  return (
    <SearchStyled>
      <box-icon name="search"></box-icon>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
      />
    </SearchStyled>
  );
};

export default Search;
