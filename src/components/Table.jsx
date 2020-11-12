import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  text-align: left;

  th {
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-bottom: 20px;
  }

  td {
    width: 100px;
    font-size: 0.9rem;
    padding-bottom: 5px;
  }

  td a {
    font-weight: 700;
  }
`;

export const Table = ({children, className}) => {
  return (
    <StyledTable className={className}>{children}</StyledTable>
  );
};