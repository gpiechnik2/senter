import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { signup, signgoogle } from '../../../actions/auth';

import {
  RegisterContainer,
  RegisterFrontWrap,
  RegisterTitle,
  RegisterGraphicWrap,
  RegisterGraphic,
  RegisterFormWrap,
  RegisterInputsWrap,
  RegisterButtonsWrap,
  RegisterTwoButtonWrap,
  HalfBtnWrap,
  RegisterInputGroup,
  RegisterLabel,
  RegisterInput,
  RegisterErrorMsg,
} from './RegisterElements';

import {
  ColumnContainerBasic,
  SingleElementContainer,
} from '../../Common/ContainerElements';
import {
  ButtonBasic,
  ButtonGoogle,
  IconGoogle,
} from '../../Common/ButtonElements';

import registerGraphic from '../../../images/register.svg';
const errorStyles = {
  color: '#EB6969',
  borderBottomColor: 'rgba(255,150,150,.85)',
};

const initialState = {
  First_name: '',
  email: '',
  password: '',
  re_password: '',
};

const GOOGLE_ID = process.env.REACT_APP_GOOGLE_ID;

const Register = () => {
  const { messageRegister } = useSelector((state) => state.messageReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    watch,
    formState: { isSubmitting },
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = () => {
    dispatch(signup(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSucces = async (res) => {
    const tokenGoogle = {
      id_token: res?.tokenObj.id_token,
    };

    try {
      dispatch(signgoogle(tokenGoogle, history));
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log('GOOGLE LOGIN FAIL', error);
  };

  return (
    <>
      <SingleElementContainer>
        <ColumnContainerBasic>
          <RegisterContainer>
            <RegisterFrontWrap>
              <RegisterGraphicWrap>
                <RegisterGraphic src={registerGraphic} />
              </RegisterGraphicWrap>
              <RegisterTitle>Sign up</RegisterTitle>
            </RegisterFrontWrap>

            <RegisterFormWrap
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              autoComplete='off'>
              <RegisterInputsWrap>
                <RegisterInputGroup>
                  <RegisterLabel htmlFor='registerUsername'>
                    Username
                  </RegisterLabel>
                  <RegisterInput
                    type='text'
                    id='registerUsername'
                    name='First_name'
                    aria-describedby='Enter username'
                    onChange={handleChange}
                    ref={register({
                      required: {
                        value: true,
                        message: 'Please enter your username',
                      },
                      minLength: {
                        value: 6,
                        message: 'Minimum 6 characters are allowed',
                      },
                      maxLength: {
                        value: 255,
                        message: 'Maximum 255 characters are allowed',
                      },
                    })}
                    style={errors.First_name && errorStyles}
                  />
                  {errors.First_name && (
                    <RegisterErrorMsg>
                      {errors.First_name.message}
                    </RegisterErrorMsg>
                  )}
                </RegisterInputGroup>

                <RegisterInputGroup>
                  <RegisterLabel htmlFor='registerEmail'>Email</RegisterLabel>
                  <RegisterInput
                    type='email'
                    id='registerEmail'
                    name='email'
                    aria-describedby='Enter email address'
                    onChange={handleChange}
                    ref={register({
                      required: {
                        value: true,
                        message: 'Please enter your email address',
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Enter a valid email address',
                      },
                      minLength: {
                        value: 6,
                        message: 'Minimum 6 characters are allowed',
                      },
                      maxLength: {
                        value: 255,
                        message: 'Maximum 255 characters are allowed',
                      },
                    })}
                    style={errors.password && errorStyles}
                  />
                  {errors.email && (
                    <RegisterErrorMsg>{errors.email.message}</RegisterErrorMsg>
                  )}
                  {messageRegister && (
                    <RegisterErrorMsg>{messageRegister}</RegisterErrorMsg>
                  )}
                </RegisterInputGroup>

                <RegisterInputGroup>
                  <RegisterLabel htmlFor='registerPassword'>
                    Password
                  </RegisterLabel>
                  <RegisterInput
                    type='password'
                    id='registerPassword'
                    name='password'
                    aria-describedby='Enter password'
                    onChange={handleChange}
                    ref={register({
                      required: {
                        value: true,
                        message: 'Please enter password',
                      },
                      minLength: {
                        value: 8,
                        message: 'Password must have at least 8 characters',
                      },
                      maxLength: {
                        value: 255,
                        message: 'Maximum 255 characters are allowed',
                      },
                    })}
                    style={errors.password && errorStyles}
                  />
                  {errors.password && (
                    <RegisterErrorMsg>
                      {errors.password.message}
                    </RegisterErrorMsg>
                  )}
                </RegisterInputGroup>

                <RegisterInputGroup>
                  <RegisterLabel htmlFor='registerRePassword'>
                    Repassword
                  </RegisterLabel>
                  <RegisterInput
                    type='password'
                    id='registerRePassword'
                    name='re_password'
                    aria-describedby='Enter password'
                    onChange={handleChange}
                    ref={register({
                      validate: (value) =>
                        value === password.current ||
                        'The passwords do not match',
                    })}
                    style={errors.re_password && errorStyles}
                  />
                  {errors.re_password && (
                    <RegisterErrorMsg>
                      {errors.re_password.message}
                    </RegisterErrorMsg>
                  )}
                </RegisterInputGroup>
              </RegisterInputsWrap>

              <RegisterButtonsWrap>
                <RegisterTwoButtonWrap>
                  <HalfBtnWrap>
                    <ButtonBasic
                      type='submit'
                      disabled={isSubmitting}
                      style={{ width: '100%' }}>
                      Join
                    </ButtonBasic>
                  </HalfBtnWrap>
                  <HalfBtnWrap>
                    <Link to='/login'>
                      <ButtonGoogle>Cancel</ButtonGoogle>
                    </Link>
                  </HalfBtnWrap>
                </RegisterTwoButtonWrap>
                <GoogleLogin
                  clientId={GOOGLE_ID}
                  render={(renderProps) => (
                    <ButtonGoogle
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      <IconGoogle />
                      Sign in with Google
                    </ButtonGoogle>
                  )}
                  onSuccess={googleSucces}
                  onFailure={googleFailure}
                  cookiePolicy='single_host_origin'
                />
              </RegisterButtonsWrap>
            </RegisterFormWrap>
          </RegisterContainer>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Register;
