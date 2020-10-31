import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  &.page-wrapper {
    padding-top: 55px;
    flex: 1 0 auto;
  }

  &.content-wrapper {
    margin: 30px auto 0 auto;
    flex: 1 0 auto;
    width: 90%;

    @media (min-width: ${props => props.theme.mobile}) {
      width: 80%;
    }
  }
`;

const Wrapper = ({ children, className }) => {
  return (
    <StyledWrapper className={className}>{children}</StyledWrapper>
  )
}

export default Wrapper;
