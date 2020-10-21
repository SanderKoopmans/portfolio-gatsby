import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  color: ${props => props.theme.mainBlack};
  margin: 0 0 1rem 0;

  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

const StyledH2 = styled.h2`
  font-weight: 300;
  font-size: 2rem;
  color: ${props => props.theme.mainBlack};
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;

  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }

  &.bold {
    font-weight: 700;
  }
`;

const StyledH3 = styled.h3`
  font-weight: 300;
  font-size: 1.5rem;
  color: ${props => props.theme.mainBlack};
  margin: 0 0 1rem 0;
  padding-bottom: 1rem;

  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

const StyledH4 = styled.h4`
  font-weight: 300;
  text-transform: uppercase;
  color: ${props => props.theme.mainBlack};
  margin: 0 0 1rem 0;
  
  &.mainWhite {
    color: ${props => props.theme.mainWhite};
  }
`;

const StyledA = styled.a`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 1rem 0;
  letter-spacing: 0.2rem;
  color: ${props => props.theme.mainBgColor};
  text-decoration: none;
  transition: color 0.3s linear;
  
  @media (max-width: ${props => props.theme.mobile}) {
    text-align: center;
  }

  &:hover {
    color: ${props => props.theme.mainHighlight};
  }
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

export const H3 = ({children, className}) => {
  return (
    <StyledH3 className={className}>{children}</StyledH3>
  );
};

export const H4 = ({children, className}) => {
  return (
    <StyledH4 className={className}>{children}</StyledH4>
  );
};

export const A = ({children, className}) => {
  return (
    <StyledA className={className}>{children}</StyledA>
  );
};