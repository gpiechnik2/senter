import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 530px;
`;
export const FormTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 16.5px;
  color: #686868;
`;
export const FormText = styled.p`
  margin-bottom: 70px;

  font-size: 12px;
  line-height: 20px;
  color: rgba(104, 104, 104, 0.8);
`;
export const FormWrap = styled.form``;
export const FormInput = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid #e6e8f1;
  font-size: 12px;
  appearance: none;

  &:focus {
    border-bottom: 1px solid #8954ba;
  }
`;
export const FormBtnWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
