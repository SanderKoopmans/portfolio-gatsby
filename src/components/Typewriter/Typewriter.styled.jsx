import styled from 'styled-components';

export const StyledSpan = styled.span`
  border-left: 2px solid ${props => props.theme.mainHighlight};
  animation: blink .7s steps(1) infinite;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;