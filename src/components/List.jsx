import React from 'react';
import styled from 'styled-components';

const StyledOl = styled.ol`
  font-size: 0.9rem;
  text-align: left;
  margin: 0 20px 20px;

  @media (min-width: ${props => props.theme.tablet}) {
    font-size: 1rem;
  }
`;

export const OL = ({children, className}) => {
  return (
    <StyledOl className={className}>{children}</StyledOl>
  );
};
