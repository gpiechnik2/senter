import styled from 'styled-components';

import { CgSoftwareDownload } from 'react-icons/cg';

export const ContentAnalysisContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 6%;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormContainer = styled.form`
  max-width: 530px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
  }
`;
export const BtnWrap = styled.div`
  padding-top: 25px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const BtnIcon = styled(CgSoftwareDownload)`
  margin-right: 4px;
  font-size: 18px;
`;
export const FormWrapper = styled.div`
  min-width: 530px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const FormItemsWrap = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 25px;
`;
export const MetaDiv = styled.div`
  margin-bottom: 4%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const MetaP = styled.p`
  margin-bottom: 6px;
  font-size: 12px;
  color: #686868;
`;
export const MetaTextArea = styled.textarea`
  height: 100px;
  font-size: 12px;
  border: 1px solid #e6e8f1;
`;
export const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ContentP = styled.p`
  margin-bottom: 6px;
  font-size: 12px;
  color: #686868;
`;
export const ContentTextArea = styled.textarea`
  height: 350px;
  font-size: 12px;
  border: 1px solid #e6e8f1;
`;
