import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { signin, signgoogle } from '../../../actions/auth';

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
import {
  ButtonBasic,
  ButtonGoogle,
  IconGoogle,
} from '../../Common/ButtonElements';

const initialState = {
  email: '',
  password: '',
};

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

const Login = () => {
  const { messageLogin } = useSelector((state) => state.messageReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = () => {
    dispatch(signin(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSucces = async (res) => {
    console.log(res);

    const token = {
      id_token: res?.tokenId,
    };

    try {
      dispatch(signgoogle(token, history));
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log('GOOGLE FAIL', error);
  };

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
                  style={{
                    borderBottom: `1px solid ${
                      messageLogin ? '#eb6969' : '#DCE2F0'
                    }`,
                  }}
                  type='email'
                  name='email'
                  placeholder='uxlead@gmail.com'
                  aria-describedby='Enter email address'
                  onChange={handleChange}
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
                  onChange={handleChange}
                  ref={register({
                    required: {
                      value: true,
                      message: 'Please enter password',
                    },
                  })}
                />
                <LoginButtonWrap>
                  <ButtonBasic
                    type='submit'
                    disabled={isSubmitting}
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
              {messageLogin && (
                <RegisterErrorMsg>{messageLogin}</RegisterErrorMsg>
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
                <GoogleLogin
                  clientId={GOOGLE_ID}
                  render={(renderProps) => (
                    <ButtonGoogle
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      <IconGoogle />
                      Zaloguj się przez Google
                    </ButtonGoogle>
                  )}
                  onSucces={googleSucces}
                  onFailure={googleFailure}
                  cookiePolicy='single_host_origin'
                />
              </LoginGoogleBtnWrap>
            </LoginFormWrap>
          </LoginContainer>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Login;
