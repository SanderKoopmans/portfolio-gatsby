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

  h4 {
    font-weight: 300;
    text-transform: uppercase;
  }
  // add custom component for following styles
  section {
    padding: 10px;
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

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
