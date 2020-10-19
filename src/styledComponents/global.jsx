import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    font-family: ${props => props.theme.mainFont};
    color: ${props => props.theme.mainBlack};
  }

  h4 {
    font-weight: 300;
    text-transform: uppercase;
  }
  
  section {
    padding: 10px;
  }

  .App {
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .page-wrapper {
    padding-top: 10%;
    margin: 10px 0;
    flex: 1 0 auto;
  }

  #homeLink {
    text-decoration: none;
    color: ${props => props.theme.mainWhite};
  }

`;