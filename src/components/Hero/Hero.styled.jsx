import styled from 'styled-components';

export const StyledHero = styled.header`
height: 100vh;
background: linear-gradient(135deg, ${props => props.theme.mainBgColor} 0%, ${props => props.theme.mainBgShade} 100%);
display: flex;
flex-direction: column;
justify-content: center;

.headerContent {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
}

.mainTitle, .mainIntro {
  margin: 0 0 20px 0;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3rem;
  color: ${props => props.theme.mainWhite};
}

.mainIntro {
  font-size: 1rem;
  font-weight: 200;
}
`;

export const StyledTopBar = styled.nav`
  position: fixed;
  top: 0;
  height: 7.5%;
  width: 100%;
  transition: all 0.3s linear;
  // background: ${props => props.theme.mainDark};

  &.scrolled {
    background: ${props => props.theme.mainDark};
    box-shadow: 0 5px 10px 0 ${props => props.theme.mainLgray};
  }
`;

export const StyledLogo = styled.a`
  text-transform: uppercase;
  color: ${props => props.theme.mainWhite};
  text-decoration: none;
  position: fixed;
  top: 2%;
  left: 2rem;
  font-size: 1.5rem;
  visibility: hidden;

  &.scrolled {
    visibility: visible;
  }
`;