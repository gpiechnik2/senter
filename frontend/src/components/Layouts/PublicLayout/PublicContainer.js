import styled from 'styled-components';

export const PublicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    'header corner-panel'
    'content content';

  min-height: 100vh;
`;
