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
font-weight: 400;
}
`;