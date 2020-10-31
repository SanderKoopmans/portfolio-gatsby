import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Theme from './src/styledComponents/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${props => props.theme.mainFont};
    height: 100%;
    color: ${props => props.theme.mainBlack};
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  #___gatsby {
    height: 100%;
  }

  .span-highlight {
    color: ${props => props.theme.mainHighlight};
    font-weight: 700;
  }

  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .background {
    padding: 40px 0 25px 0;
    background: ${props => props.theme.mainLgray};
    // background: linear-gradient(135deg, ${props => props.theme.mainBgColor} 0%, ${props => props.theme.mainBgShade} 100%);
    color: ${props => props.theme.mainWhite};
  }

  .content-small {
    padding: 40px 10% 25px 10%;

    @media (min-width: ${props => props.theme.mobile}) {
      padding: 40px 30% 25px 30%;
    }
  }

  .contactContainer {
    padding: 15px;
  }

  #homeLink {
    text-decoration: none;
    color: ${props => props.theme.mainWhite};
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
