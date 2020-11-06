import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  margin-bottom:40px;

  .introduction-header {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: center;
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
`;