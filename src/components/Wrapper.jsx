import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 10%;
  margin: 10px auto;
  flex: 1 0 auto;
  width: 90%;

  @media (min-width: ${props => props.theme.mobile}) {
    width: 80%;
  }
`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>{children}</StyledWrapper>
  )
}

export default Wrapper;
