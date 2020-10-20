import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-top: 10%;
  margin: 10px 0;
  flex: 1 0 auto;
`;

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>{children}</StyledWrapper>
  )
}

export default Wrapper;
