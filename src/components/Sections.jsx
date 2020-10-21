import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  padding: 25px 0 25px 0;

  &.section:nth-child(even) {
    background: ${props => props.theme.mainLgray};
  }
`;

export const Section = ({children, className}) => {
  return (
    <StyledSection className={className}>{children}</StyledSection>
  );
};