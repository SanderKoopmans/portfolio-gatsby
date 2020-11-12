import styled from 'styled-components';

export const StyledPortfolioItem = styled.div`
  max-width: 65ch;
  display: flex;
  flex-direction: column;

  .image-container {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 50px;
  }

  .itemScreenshot {
    width: 50%;
    align-self: center;
  }

  @media (min-width: ${props => props.theme.tablet}) {
    .itemScreenshot {
      width: 50%;
      box-shadow: 10px 10px 10px ${props => props.theme.shadowLgray};
      margin-bottom: 50px;
    }
  }

  .content-columns {
    .content-left {
      text-align: center;
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
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;