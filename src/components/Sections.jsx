import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  width: 100%;
  // margin: 15px 0 0 0;
  padding: 10px 0 0 0;

  &.section:nth-child(even) {
    background: ${props => props.theme.mainLgray};
  }
`;

export const Section = ({children, className}) => {
  return (
    <StyledSection className={className}>{children}</StyledSection>
  );
};