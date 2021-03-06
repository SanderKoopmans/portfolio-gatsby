import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 2%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  .burgerBar {
    width: 2rem;
    height: 0.2rem;
    background: ${props => props.theme.mainWhite};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ mobileMenuOpen }) => mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ mobileMenuOpen }) => mobileMenuOpen ? '0' : '1'};
      transform: ${({ mobileMenuOpen }) => mobileMenuOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ mobileMenuOpen }) => mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    &.openMenu {
      background: ${props => props.theme.mainBgColor};
    }
  }
`;