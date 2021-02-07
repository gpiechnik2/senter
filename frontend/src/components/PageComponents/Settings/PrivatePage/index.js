import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { changeuseremail } from '../../../../actions/changeUserEmail';
import { changeuserpassword } from '../../../../actions/changeUserPassword';

import toast from 'react-hot-toast';

import { PrivatePageContainer } from './PrivatePageElements';
import {
  MultipleFormsContainer,
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';
import { RegisterErrorMsg } from '../../../PageComponents/Register/RegisterElements';
import { ButtonBasic } from '../../../Common/ButtonElements';
import { StyledProperWidth } from '../../../Common/ContainerElements';

const initialStateEmail = {
  new_email: '',
};
const initialStatePassword = {
  current_password: '',
  new_password: '',
  re_new_password: '',
};

let emailChangeToast;
let passwordChangeToast;

const errorStyles = {
  color: '#EB6969',
  borderBottomColor: 'rgba(255,150,150,.85)',
};

const PrivatePage = () => {
  const { userEmailChangeData, isLoadingEmail, isErrorEmail } = useSelector(
    (state) => state.changeUserEmailReducer
  );
  const {
    userPasswordChangeData,
    isLoadingPassword,
    isErrorPassword,
  } = useSelector((state) => state.changeUserPasswordReducer);
  const [emailData, setEmailData] = useState(initialStateEmail);
  const [passwordData, setPasswordData] = useState(initialStatePassword);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, watch, reset } = useForm();
  const password = useRef({});
  password.current = watch('new_password', '');

  const handleEmailChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const onEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(changeuseremail(emailData));
    setEmailData({ ...emailData, new_email: '' });

    emailChangeToast = toast.loading('Changing user email...');
  };
  const onPasswordSubmit = () => {
    dispatch(changeuserpassword(passwordData));
    passwordChangeToast = toast.loading('Changing password...');
    reset();
  };

  useEffect(() => {
    if (userEmailChangeData?.new_email && !isErrorEmail) {
      toast.success(userEmailChangeData.new_email, {
        id: emailChangeToast,
      });
    } else if (userEmailChangeData?.new_email && isErrorEmail) {
      toast.error(userEmailChangeData.new_email, {
        id: emailChangeToast,
      });
    } else if (userEmailChangeData?.User && isErrorEmail) {
      toast.error(userEmailChangeData.User, {
        id: emailChangeToast,
      });
    } else if (isErrorEmail) {
      toast.error('Unable to change user email.', {
        id: emailChangeToast,
      });
    }
  }, [userEmailChangeData, isErrorEmail]);

  useEffect(() => {
    if (userPasswordChangeData?.password) {
      toast.success(userPasswordChangeData.password, {
        id: passwordChangeToast,
      });
    } else if (userPasswordChangeData?.User && isErrorPassword) {
      toast.error(userPasswordChangeData.User, {
        id: passwordChangeToast,
      });
    } else if (userPasswordChangeData?.current_password && isErrorPassword) {
      toast.error(userPasswordChangeData.current_password, {
        id: passwordChangeToast,
      });
    } else if (isErrorPassword) {
      toast.error('Unable to change password.', {
        id: passwordChangeToast,
      });
      console.log(userPasswordChangeData);
    }
  }, [userPasswordChangeData, isErrorPassword]);

  return (
    <>
      <PrivatePageContainer>
        <MultipleFormsContainer>
          <StyledProperWidth>
            <FormContainer>
              <FormTitle>Email</FormTitle>
              <FormText>Change your email.</FormText>
              <FormWrap onSubmit={onEmailSubmit}>
                <FormInput
                  required
                  type='email'
                  name='new_email'
                  placeholder='Username'
                  aria-describedby='Enter email'
                  value={emailData.new_email}
                  onChange={handleEmailChange}
                />
                <FormBtnWrap>
                  <ButtonBasic type='submit' disabled={isLoadingEmail}>
                    Change
                  </ButtonBasic>
                </FormBtnWrap>
              </FormWrap>
            </FormContainer>
          </StyledProperWidth>
          <FormContainer>
            <FormTitle>Password</FormTitle>
            <FormText>Change your password.</FormText>
            <FormWrap
              onSubmit={handleSubmit(onPasswordSubmit)}
              noValidate
              autoComplete='off'>
              <FormInput
                type='password'
                name='current_password'
                placeholder='Current password'
                aria-describedby='Enter current password'
                onChange={handlePasswordChange}
                ref={register({
                  required: {
                    value: true,
                    message: 'Please enter current password',
                  },
                })}
                style={errors.current_password && errorStyles}
              />
              {errors.current_password && (
                <RegisterErrorMsg style={{ marginTop: '-10px' }}>
                  {errors.current_password.message}
                </RegisterErrorMsg>
              )}
              <FormInput
                type='password'
                name='new_password'
                placeholder='New password'
                aria-describedby='Enter new password'
                onChange={handlePasswordChange}
                ref={register({
                  required: {
                    value: true,
                    message: 'Please enter new password',
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
                style={errors.new_password && errorStyles}
              />
              {errors.new_password && (
                <RegisterErrorMsg style={{ marginTop: '-10px' }}>
                  {errors.new_password.message}
                </RegisterErrorMsg>
              )}
              <FormInput
                type='password'
                name='re_new_password'
                placeholder='Repassword'
                aria-describedby='Enter new password again'
                onChange={handlePasswordChange}
                ref={register({
                  validate: (value) =>
                    value === password.current || 'The passwords do not match',
                })}
                style={errors.re_new_password && errorStyles}
              />
              {errors.re_new_password && (
                <RegisterErrorMsg style={{ marginTop: '-10px' }}>
                  {errors.re_new_password.message}
                </RegisterErrorMsg>
              )}
              <FormBtnWrap>
                <ButtonBasic type='submit' disabled={isLoadingPassword}>
                  Change
                </ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </FormContainer>
        </MultipleFormsContainer>
      </PrivatePageContainer>
    </>
  );
};

export default PrivatePage;
