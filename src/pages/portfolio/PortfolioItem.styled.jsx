import styled from 'styled-components';

export const StyledPortfolioItem = styled.div`
  max-width: 65ch;

  .itemScreenshot {
    width: 120%;
    box-shadow: 10px 10px 10px ${props => props.theme.shadowLgray};
    margin-bottom: 50px;
  }

  .content-columns {
    display: flex;
    flex-direction: row;
  }

  .content-left, .content-right {
    width: 50%;
  }

  .content-left {
    margin: auto 0;
  }
`;