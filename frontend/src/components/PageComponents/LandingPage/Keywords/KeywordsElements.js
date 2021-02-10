import styled from 'styled-components';

export const KeywordsContainer = styled.div`
  padding: 50px 30px 100px 30px;
  display: flex;
  justify-content: center;
`;
export const KeywordsWrapper = styled.div`
  max-width: 920px;
  display: grid;
  align-items: start;
  gap: 50px;
  grid-auto-columns: auto 1fr;
  grid-template-areas: 'img col2';

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'img'
      'col2';
  }
`;
export const Column1 = styled.div`
  grid-area: img;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
export const Column2 = styled.div`
  grid-area: col2;
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
export const TextElement = styled.div`
  margin-bottom: 40px;
`;
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
