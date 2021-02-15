import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const SearchStyled = styled.div`
  position: relative;
  .bx {
    position: absolute;
    top: 4px;
    right: 10px;
  }
`;
const InputStyled = styled.input`
  width: 20vw;
  padding: 8px 16px;
  font-size: 0.8rem;
  background-color: ${Variables.grey0};
  border: 0;
  border-radius: 100px;
`;

const Search = () => {
  return (
    <SearchStyled>
      <i class="bx bx-search"></i>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
      />
    </SearchStyled>
  );
};

export default Search;
