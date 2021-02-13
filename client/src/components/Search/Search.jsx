import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const InputStyled = styled.input`
  border: none;
  border-radius: 100px;
  background-color: ${Variables.grey0};
  padding: 8px 16px;
  width: 30%;
`;

const Search = () => {
  return (
    <>
      <InputStyled
        type="text"
        name="search"
        placeholder="Buscador una palabra"
      />
    </>
  );
};

export default Search;
