import styled from 'styled-components';

export const ColumnContainerBasic = styled.div`
  max-width: 530px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
  }
`;

export const SingleElementContainer = styled.div`
  margin-top: 6%;
  padding-left: 4vw;
  padding-right: 4vw;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;
