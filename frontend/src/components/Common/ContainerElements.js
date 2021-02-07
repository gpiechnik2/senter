import styled from 'styled-components';

export const ColumnContainerBasic = styled.div`
  max-width: 530px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const PaginationContainer = styled.div`
  max-width: 530px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: auto;
  }
`;

export const GraphicContainer = styled.div`
  width: 100%;
`;
export const GraphicImg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const StyledProperWidth = styled.div`
  min-width: 530px;
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;
