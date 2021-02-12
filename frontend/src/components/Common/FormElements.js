import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 530px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const FormTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 22px;
  color: #686868;
`;
export const FormText = styled.p`
  margin-bottom: 20px;

  font-size: 13px;
  line-height: 20px;
  color: rgba(104, 104, 104, 0.8);
`;
export const FormWrap = styled.form``;
export const FormInput = styled.input`
  margin-bottom: 19px;
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #e6e8f1;
  font-size: 13px;
  appearance: none;

  &:focus {
    border-bottom: 1px solid #8954ba;
  }
`;

export const FormBtnWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MultipleFormsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSelectContainer = styled.div`
  width: 100%;
  margin-bottom: 19px;
`;

export const SaveButtonWrap = styled.div`
  margin-top: 20px;
  min-width: 530px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;
