import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.theme.mainLgray};
  height: 100vh;
  border-left: 1px solid ${props => props.theme.mainDgray};
  text-align: right;
  padding: 10px 5px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ mobileMenuOpen }) => mobileMenuOpen ? 'translateX(0)' : 'translateX(+130%)'};
  
  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${props => props.theme.mainBgColor};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${props => props.theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${props => props.theme.mainHighlight};
    }
  }

  .small {
    font-size: 1rem;
    padding: 1rem;
    justify-content: flex-end;
  }
`;