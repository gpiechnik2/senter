import styled from 'styled-components';

export const PublicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 55px;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'header corner-panel'
    'content content';

  min-height: 100vh;

  overflow-x: hidden;
`;
