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
    display: flex;
    flex-direction: column;
  }

  a {
    font-size: 0.9rem;
    color: ${props => props.theme.mainHighlight};
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.mainBlack};
    }

    @media (min-width: ${props => props.theme.mobile}) {
      font-size: 1rem;
    }
  }

  #___gatsby {
    height: 100%;
  }

  .span-highlight {
    color: ${props => props.theme.mainHighlight};
    font-weight: 700;
  }

  .span-skills {
    font-size: 0.9rem;
    display: inline-block;
    margin: 10px;
    padding: 5px 20px;
    background: ${props => props.theme.mainDgray};
    border: 1px solid ${props => props.theme.mainDgray};
    border-radius: 5px;
    color: ${props => props.theme.mainHighlight};

    @media (min-width: ${props => props.theme.mobile}) {
      font-size: 1rem;
    }
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
    font-size: 2rem;
    text-decoration: none;
    color: ${props => props.theme.mainWhite};
  }

  .content-container {
    max-width: 65ch;
    margin: 0 auto 150px auto;
  }

  .sub-container {
    max-width: 65ch;
    margin-bottom: 50px;
  }

  .img-container {
    margin-bottom: 50px;
  }

  .img-container img {
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .bold {
    font-weight: 700;
  }

  .content-columns {
    .content-left {
      text-align: left;
      margin-bottom: 20px;
    }

    @media (min-width: ${props => props.theme.tablet}) {
      display: flex;
      flex-direction: row;

      .content-left, .content-right {
        width: 50%;
      }

      .content-left {
        margin: auto 0;
      }

      .content-right {
        margin-left: 20px;
      }
    }
  }

  .button {
    font-size: 0.9rem;
    margin: 5px;
    padding: 5px 15px;
    background: ${props => props.theme.mainBgColor};
    color: ${props => props.theme.mainWhite};
    border-radius: 3px;
    box-shadow: 3px 3px 10px ${props => props.theme.shadowLgray};
    transition: 0.3s ease;

    &:hover {
      background: ${props => props.theme.mainHighlight};
    }
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
