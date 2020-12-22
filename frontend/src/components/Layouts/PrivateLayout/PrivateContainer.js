import styled from 'styled-components';

export const PrivateContainer = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 80px;
  grid-template-rows: 70px minmax(70px, auto) 1fr;
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
