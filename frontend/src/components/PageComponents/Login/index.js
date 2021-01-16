import { useForm } from 'react-hook-form';

import {
  LoginContainer,
  LoginTitle,
  LoginFormWrap,
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
} from './LoginElements';
import { RegisterErrorMsg } from '../Register/RegisterElements';

import {
  ColumnContainerBasic,
  SingleElementContainer,
} from '../../Common/ContainerElements';
import { ButtonBasic, ButtonGoogle } from '../../Common/ButtonElements';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <LoginContainer>
            <LoginTitle>Zaloguj się</LoginTitle>
            <LoginFormWrap
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete='off'>
              <LoginInputWrap>
                <LoginInput
                  style={{ borderBottom: '1px solid #DCE2F0' }}
                  type='email'
                  name='email'
                  placeholder='uxlead@gmail.com'
                  aria-describedby='Enter email address'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter your email address',
                    },
                  })}
                />
                <LoginInput
                  type='password'
                  name='password'
                  placeholder='Password'
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter password',
                    },
                  })}
                />
                <LoginButtonWrap>
                  <ButtonBasic
                    style={{
                      boxShadow: '0px 12px 35px rgba(52, 77, 178, 0.34)',
                    }}>
                    Zaloguj
                  </ButtonBasic>
                </LoginButtonWrap>
              </LoginInputWrap>
              {errors.email && (
                <RegisterErrorMsg> {errors.email.message}</RegisterErrorMsg>
              )}
              {errors.password && (
                <RegisterErrorMsg> {errors.password.message}</RegisterErrorMsg>
              )}
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
            </LoginFormWrap>
          </LoginContainer>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Login;
