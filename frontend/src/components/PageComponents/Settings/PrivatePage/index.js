import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeuseremail } from '../../../../actions/changeUserEmail';

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
import { ButtonBasic } from '../../../Common/ButtonElements';

const initialStateEmail = {
  new_email: '',
};

let emailChangeToast;

const PrivatePage = () => {
  const { userEmailChangeData, isLoadingEmail, isErrorEmail } = useSelector(
    (state) => state.changeUserEmailReducer
  );
  const [emailData, setEmailData] = useState(initialStateEmail);
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const onEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(changeuseremail(emailData));
    setEmailData({ ...emailData, new_email: '' });

    emailChangeToast = toast.loading('Changing user email...');
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

  return (
    <>
      <PrivatePageContainer>
        <MultipleFormsContainer>
          <FormContainer>
            <FormTitle>Email</FormTitle>
            <FormText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </FormText>
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
          <FormContainer>
            <FormTitle>Password</FormTitle>
            <FormText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </FormText>
            <FormWrap>
              <FormInput placeholder='Old password' />
              <FormInput placeholder='New password' />
              <FormInput placeholder='Repassword' />
              <FormBtnWrap>
                <ButtonBasic>Change</ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </FormContainer>
        </MultipleFormsContainer>
      </PrivatePageContainer>
    </>
  );
};

export default PrivatePage;
