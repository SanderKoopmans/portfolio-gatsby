import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${props => props.theme.mainDark};
  color: ${props => props.theme.mainAccent};
  padding: 20px;
  flex-shrink: 0;

  .footer-cta {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
    transition: all 0.3s linear;
    
    &:hover {
      // border-bottom: 1px solid ${props => props.theme.mainWhite};
      // border-bottom-width: thin;
      cursor: pointer;
    }

    @media (min-width: ${props => props.theme.mobile}) {
      padding: 0 20%;
    }
  }

  .footer-tagline {
    display: flex;
    justify-content: flex-start;
    font-weight: 300;
    transition: all 0.3s linear;

    & h6 {
      margin: 0 0 0 5px;
    }

    @media (min-width: ${props => props.theme.mobile}) {
      padding: 0 20%;
    }
  }

  .footer-cta h1 {
    font-size: 3rem;
    font-weight: 200;
    margin: 0 0 0 0;
  }

  .footer-copy, .footer-copy a {
    font-size: 12px;
    margin: 5px 0 0 0;
    text-decoration: none;
    color: ${props => props.theme.mainLgray};
  }
`;