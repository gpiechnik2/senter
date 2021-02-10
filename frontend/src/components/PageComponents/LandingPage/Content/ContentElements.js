import styled from 'styled-components';

export const ContentContainer = styled.div`
  padding: 50px 30px 100px 30px;
  display: flex;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  max-width: 920px;
  display: grid;
  gap: 50px;
  align-items: start;
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
export const TextWrap = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TextElement = styled.div``;
export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 22px;
  color: #686868;
`;
export const Text = styled.p`
  line-height: 20px;
  font-size: 13px;
  color: rgba(104, 104, 104, 0.8);
`;
export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
