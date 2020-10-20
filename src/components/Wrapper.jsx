import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const Wrapper = ({ children, className }) => {
  return (
    <StyledWrapper className={className}>{children}</StyledWrapper>
  )
}

export default Wrapper;
