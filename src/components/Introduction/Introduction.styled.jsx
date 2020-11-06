import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  .introduction-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;

    @media (min-width: ${props => props.theme.tablet}) {
      flex-direction: row;
    }
  }

  .introduction-picture {
    margin: 0 15px 0 0;
  }

  .introduction-picture img {
    width: 200px;
    height: 200px;
    clip-path: polygon(50% 0, 100% 50%, 100% 100%, 50% 100%, 0 50%);
  }

  .introduction-title {
    margin: auto 0;
  }

  .introduction-title {

    &::after {
      content: '';
      border-bottom: 2px solid ${props => props.theme.mainBgColor};
      width: 100px;
      display: block;
      margin: 0 auto;
    }
  }
`;