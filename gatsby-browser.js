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

  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .background {
    background: linear-gradient(135deg, ${props => props.theme.mainBgColor} 0%, ${props => props.theme.mainBgShade} 100%);
    color: ${props => props.theme.mainWhite};
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
