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

  h4 {
    font-weight: 300;
    text-transform: uppercase;
  }

  .page-wrapper {
    padding-top: 8%;
    flex: 1 0 auto;
  }

  .content-wrapper {
    margin: 10px auto 0 auto;
    flex: 1 0 auto;
    width: 90%;

    @media (min-width: ${props => props.theme.mobile}) {
      width: 80%;
    }
  }

  .section:nth-child(even) {
    background: ${props => props.theme.mainLgray};
  }

  .contactContainer {
    background: ${props => props.theme.mainLgray};
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
