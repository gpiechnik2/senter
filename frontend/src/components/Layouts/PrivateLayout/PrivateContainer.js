import styled from 'styled-components';

export const PrivateContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 55px;
  grid-template-rows: 50px 50px 1fr;
  grid-template-areas:
    'header header corner-panel'
    'aside crumb-nav crumb-nav'
    'aside content content';

  min-height: 100vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 55px;
    grid-template-rows: 50px 1fr;
    grid-template-areas:
      'header corner-panel'
      'content content';
  }

  overflow-x: hidden;
`;
