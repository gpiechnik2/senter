import styled from 'styled-components';

export const InfoContainer = styled.div`
  padding: 0 30px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
`;
export const InfoWrapper = styled.div`
  max-width: 1600px;
  display: grid;
  align-items: center;
  grid-auto-columns: 1fr auto 1fr;
  grid-template-areas: 'col1 img col2';

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'col1'
      'img'
      'col2';
  }
`;
export const Column1 = styled.div`
  grid-area: col1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Column2 = styled.div`
  grid-area: img;

  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Column3 = styled.div`
  grid-area: col2;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;
`;
export const TextTitle = styled.h2`
  margin-bottom: 5px;
  max-width: 160px;
  text-align: center;
  color: #5d38db;
  font-size: 13px;
  font-weight: bold;
`;
export const TextP = styled.p`
  max-width: 210px;
  text-align: center;
  font-size: 13px;
  color: #707070;
`;
export const ImgWrap = styled.div`
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
`;
