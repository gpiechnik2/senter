import styled from 'styled-components';

export const LoginContainer = styled.div`
  min-width: 530px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;
export const LoginTitle = styled.h1`
  margin-bottom: 70px;
  text-align: center;
  font-size: 28px;
  color: #575757;
`;
export const LoginFormWrap = styled.form`
  display: flex;
  flex-direction: column;
`;
export const LoginInputWrap = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  margin-bottom: 41px;
`;
export const LoginInput = styled.input`
  padding: 0 3%;
  width: 100%;
  height: 50%;
  border-bottom: none;
  font-size: 12px;
  font-weight: 500;
  line-height: 19px;
  color: #0e0c0c;

  &:focus {
    border-bottom: none;
  }
`;
export const LoginButtonWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LoginCheckWrap = styled.div`
  padding: 0 18px;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
`;
export const CheckRememberWrap = styled.div`
  margin-right: 46px;
  display: flex;
  align-items: center;
`;
export const InputRemember = styled.input`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border: 1px solid #91a1c6;
  border-radius: 2px;
  color: #f5f6fa;

  appearance: checkbox;

  &:focus {
    border-bottom: none;
  }
`;
export const LabelRemember = styled.label`
  font-size: 12px;
  color: #686868;
`;

export const LoginGoogleBtnWrap = styled.div``;

export const LogininBtnWrapMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const ErrorsWrapper = styled.div`
  margin-top: -30px;
  margin-bottom: 10px;
  padding: 0 10px;
`;
