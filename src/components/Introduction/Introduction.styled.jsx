import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  .introduction-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
    
    @media (min-width: ${props => props.theme.tablet}) {
      flex-direction: row;
    }
  }

  .introduction-picture {
    margin: 0 15px 0 0;
  }

  .introduction-picture img {
    width: 280px;
    height: 280px;

    &.clip {
      clip-path: polygon(50% 0, 100% 50%, 100% 100%, 50% 100%, 0 50%);
    }
  }

  .introduction-title {
    margin: auto 0;
  }

  .introduction-title {

    &::after {
      content: '';
      border-bottom: 2px solid ${props => props.theme.mainBgColor};
      width: 50px;
      display: block;
      margin: 0 auto 20px auto;
    }
  }
`;