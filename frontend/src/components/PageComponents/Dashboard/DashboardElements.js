import styled from 'styled-components';

export const DashboardWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding: 107px 4vw 38px 4vw;
`;
export const UpdatesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const UpdateSection = styled.section`
  width: 49%;

  margin-bottom: 20px;
  padding: 51px 46px 24px 48px;
  border: 1px solid #e8ebf2;
  border-radius: 4px;
  -webkit-box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);
  box-shadow: -10px 9px 21px rgba(128, 152, 213, 0.07);
`;
export const UpdateTitle = styled.h2`
  margin-bottom: 11.5px;
  font-size: 14px;
  color: #8954ba;
`;
export const UpdateArticle = styled.article`
  padding: 19.5px 0 42.5px 0;
  border-top: 1px solid #d6d8e3;
  border-bottom: 1px solid #d6d8e3;
`;
export const UpdateArticleSmall = styled.article`
  padding-top: 19.5px;
  border-top: 1px solid #d6d8e3;
  border-bottom: 1px solid #d6d8e3;
`;
export const UpdateArticleTitle = styled.h3`
  margin-bottom: 11px;
  font-size: 13px;
  color: #686868;
`;
export const UpdateText = styled.p`
  margin-bottom: 30px;
  line-height: 25px;
  font-size: 12px;
  color: rgba(104, 104, 104, 0.8);
`;
export const UpdateLink = styled.a`
  font-size: 13px;
  color: #4a90e2;
`;
export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const ButtonLink = styled.a`
  padding: 10px 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  background-color: #5d38db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
