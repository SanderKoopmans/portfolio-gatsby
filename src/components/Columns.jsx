import React from 'react';
import styled from 'styled-components';

const StyledColumns = styled.div`
  padding: 2%;
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
`;

const StyledColumn = styled.div`
  display: table-cell;
  padding: 0;

  @media (max-width: ${props => props.theme.tablet}) {
    display: block;
  }
`;

export const Columns = ({children}) => {
  return (
    <StyledColumns>{children}</StyledColumns>
  );
};

export const Column = ({children}) => {
  return (
    <StyledColumn>{children}</StyledColumn>
  );
};
