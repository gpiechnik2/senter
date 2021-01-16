import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
import { ButtonBasic, ButtonGoogle } from '../../Common/ButtonElements';

import registerGraphic from '../../../images/register.svg';
const errorStyles = {
  color: '#EB6969',
  borderBottomColor: 'rgba(255,150,150,.85)',
};

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = (data) => console.log(data);

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
                    name='username'
                    aria-describedby='Enter username'
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
                    style={errors.username && errorStyles}
                  />
                  {errors.username && (
                    <RegisterErrorMsg>
                      {errors.username.message}
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
                    style={errors.email && errorStyles}
                  />
                  {errors.email && (
                    <RegisterErrorMsg>{errors.email.message}</RegisterErrorMsg>
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
                    name='password_repeat'
                    aria-describedby='Enter password'
                    ref={register({
                      validate: (value) =>
                        value === password.current ||
                        'The passwords do not match',
                    })}
                    style={errors.password_repeat && errorStyles}
                  />
                  {errors.password_repeat && (
                    <RegisterErrorMsg>
                      {errors.password_repeat.message}
                    </RegisterErrorMsg>
                  )}
                </RegisterInputGroup>
              </RegisterInputsWrap>

              <RegisterButtonsWrap>
                <RegisterTwoButtonWrap>
                  <HalfBtnWrap>
                    <ButtonBasic type='submit' style={{ width: '100%' }}>
                      Join
                    </ButtonBasic>
                  </HalfBtnWrap>
                  <HalfBtnWrap>
                    <Link to='/login'>
                      <ButtonGoogle>Cancel</ButtonGoogle>
                    </Link>
                  </HalfBtnWrap>
                </RegisterTwoButtonWrap>
                <ButtonGoogle>Zaloguj się przez Google</ButtonGoogle>
              </RegisterButtonsWrap>
            </RegisterFormWrap>
          </RegisterContainer>
        </ColumnContainerBasic>
      </SingleElementContainer>
    </>
  );
};

export default Register;
