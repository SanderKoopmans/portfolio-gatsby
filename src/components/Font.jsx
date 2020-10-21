import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  color: ${props => props.theme.mainBlack};

  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

const StyledH2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  color: ${props => props.theme.mainBlack};

  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

const StyledH4 = styled.h4`
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.mainBlack};
  
  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

export const H1 = ({children, className}) => {
  return (
    <StyledH1 className={className}>{children}</StyledH1>
  );
};

export const H2 = ({children, className}) => {
  return (
    <StyledH2 className={className}>{children}</StyledH2>
  );
};

export const H4 = ({children, className}) => {
  return (
    <StyledH4 className={className}>{children}</StyledH4>
  );
};