import styled from 'styled-components';

export const RegisterContainer = styled.div`
  min-width: 530px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`;

export const RegisterFrontWrap = styled.div`
  margin-bottom: 70px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterTitle = styled.h1`
  font-size: 28px;
  color: #575757;
`;

export const RegisterGraphicWrap = styled.div`
  margin-bottom: 19px;
`;
export const RegisterGraphic = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
`;

export const RegisterFormWrap = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const RegisterInputsWrap = styled.div`
  margin-bottom: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const RegisterButtonsWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const RegisterTwoButtonWrap = styled.div`
  margin-bottom: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;
export const HalfBtnWrap = styled.div`
  width: 49%;
`;
export const RegisterInputGroup = styled.div`
  margin-bottom: 19px;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const RegisterLabel = styled.label`
  color: rgba(104, 104, 104, 0.6);
  line-height: 16px;
  font-size: 12px;
`;
export const RegisterInput = styled.input`
  margin-bottom: 5px;
  width: 100%;

  line-height: 17px;
  font-size: 13px;
  color: #8954ba;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #8954ba;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const RegisterErrorMsg = styled.span`
  width: 100%;
  display: block;
  font-size: 13px;
  color: #eb6969;
`;
