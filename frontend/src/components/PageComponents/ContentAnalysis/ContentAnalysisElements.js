import styled from 'styled-components';

import { CgSoftwareDownload } from 'react-icons/cg';

export const ContentAnalysisContainer = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 5%;
  padding-left: 4vw;
  padding-right: 4vw;
  display: flex;
  flex-direction: column;
`;
export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
export const BtnWrap = styled.div`
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
  width: 100%;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormItemsWrap = styled.div`
  max-width: 530px;
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
export const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TableWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
`;
export const TableTitle = styled.h1`
  font-size: 17px;
  color: #686868;
  margin-bottom: 3%;
`;
export const TableElementsWrapper = styled.div`
  width: 100%;
  /* overflow-x: scroll; */

  display: flex;
  flex-direction: column;
`;
export const TableElement = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #e6e8f1;
`;
export const ElementWrapFirst = styled.div`
  width: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ElementBox = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;

  display: block;
  border-radius: 2px;
  border: 1px solid #979797;
`;
export const ElementText = styled.p`
  font-size: 12px;
  color: #686868;
`;
export const ElementWrapSecond = styled.div`
  width: 12%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const ElementWrap = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
