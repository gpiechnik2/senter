import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signin } from '../../../actions/auth';

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

const initialState = {
  email: '',
  password: '',
};

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
