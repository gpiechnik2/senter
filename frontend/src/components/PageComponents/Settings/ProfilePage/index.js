import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changecontactemail } from '../../../../actions/changeContactEmail';

import toast from 'react-hot-toast';

import { ProfilePageContainer } from './ProfilePageElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';
import { ButtonBasic } from '../../../Common/ButtonElements';
import { StyledProperWidth } from '../../../Common/ContainerElements';

const initialState = {
  new_contact_email: '',
};

let changeToast;

const ProfilePage = () => {
  const { contactEmailChangeData, isLoading, isError } = useSelector(
    (state) => state.changeContactEmailReducer
  );
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(changecontactemail(formData));
    setFormData({ ...formData, new_contact_email: '' });

    changeToast = toast.loading('Changing contact email...');
  };

  useEffect(() => {
    if (contactEmailChangeData?.new_contact_email) {
      toast.success(contactEmailChangeData.new_contact_email, {
        id: changeToast,
      });
    } else if (contactEmailChangeData?.User && isError) {
      toast.error(contactEmailChangeData.User, {
        id: changeToast,
      });
    } else if (isError) {
      toast.error('Unable to change contact email.', {
        id: changeToast,
      });
    }
  }, [contactEmailChangeData, isError]);

  return (
    <>
      <ProfilePageContainer>
        <FormContainer>
          <StyledProperWidth>
            <FormTitle>Contact email</FormTitle>
            <FormText>Change your contact email.</FormText>
            <FormWrap onSubmit={onSubmit}>
              <FormInput
                required
                type='email'
                name='new_contact_email'
                placeholder='Email'
                aria-describedby='Enter email'
                value={formData.new_contact_email}
                onChange={handleChange}
              />
              <FormBtnWrap>
                <ButtonBasic type='submit' disabled={isLoading}>
                  Change
                </ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </StyledProperWidth>
        </FormContainer>
      </ProfilePageContainer>
    </>
  );
};

export default ProfilePage;
