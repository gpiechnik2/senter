import {
  RegisterContainer,
  RegisterFrontWrap,
  RegisterTitle,
  RegisterGraphicWrap,
  RegisterGraphic,
  RegisterFormWrap,
  LoginInputWrap,
  LoginInput,
  LoginButtonWrap,
  LoginCheckWrap,
  CheckRememberWrap,
  InputRemember,
  LabelRemember,
  ForgotWrap,
  ForgotLink,
  LoginGoogleBtnWrap,
} from './RegisterElements';

import registerGraphic from '../../../images/register.svg';

import {
  ColumnContainerBasic,
  SingleElementContainer,
} from '../../Common/ContainerElements';
import { ButtonBasic, ButtonGoogle } from '../../Common/ButtonElements';

const Register = () => {
  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <RegisterContainer>
            <RegisterFrontWrap>
              <RegisterGraphicWrap>
                <RegisterGraphic src={registerGraphic} />
              </RegisterGraphicWrap>
              <RegisterTitle>Zarejestruj się</RegisterTitle>
            </RegisterFrontWrap>

            <RegisterFormWrap>
              <LoginInputWrap>
                <LoginInput
                  style={{ borderBottom: '1px solid #DCE2F0' }}
                  type='email'
                  placeholder='uxlead@gmail.com'
                />
                <LoginInput type='password' placeholder='Password' />
                <LoginButtonWrap>
                  <ButtonBasic
                    style={{
                      boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.34)',
                    }}>
                    Zaloguj
                  </ButtonBasic>
                </LoginButtonWrap>
              </LoginInputWrap>
              <LoginCheckWrap>
                <CheckRememberWrap>
                  <InputRemember type='checkbox' id='remember-me' />
                  <LabelRemember htmlFor='remember-me'>
                    Remember me
                  </LabelRemember>
                </CheckRememberWrap>
                <ForgotWrap>
                  <ForgotLink>Forgot Password?</ForgotLink>
                </ForgotWrap>
              </LoginCheckWrap>
              <LoginGoogleBtnWrap>
                <ButtonGoogle>Zaloguj się przez Google</ButtonGoogle>
              </LoginGoogleBtnWrap>
            </RegisterFormWrap>
          </RegisterContainer>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Register;
