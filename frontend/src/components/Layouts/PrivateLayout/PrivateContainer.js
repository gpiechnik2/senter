import styled from 'styled-components';

export const PrivateContainer = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr 80px;
  grid-template-rows: 70px 50px 1fr;
  grid-template-areas:
    'header header corner-panel'
    'aside crumb-nav crumb-nav'
    'aside content content';

  min-height: 100vh;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 80px;
    grid-template-rows: 70px 1fr;
    grid-template-areas:
      'header corner-panel'
      'content content';
  }
`;
