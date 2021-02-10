import styled from 'styled-components';

export const ScannersContainer = styled.div`
  padding: 0 30px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;
export const ScannersWrapper = styled.div`
  max-width: 920px;
  display: grid;
  align-items: center;
  grid-auto-columns: 1fr auto;
  grid-template-areas: 'col1 img';

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'col1'
      'img';
  }
`;

export const Column1 = styled.div`
  grid-area: col1;

  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Column2 = styled.div`
  grid-area: img;

  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ContentWrap = styled.div``;
export const Title = styled.h2`
  font-size: 22px;
  color: #686868;
`;
export const AccordionWrapper = styled.div`
  min-width: 420px;

  @media screen and (max-width: 768px) {
    min-width: auto;
  }
`;
export const TextWrap = styled.div``;
export const TextP = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: rgba(104, 104, 104, 0.8);
`;
export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
