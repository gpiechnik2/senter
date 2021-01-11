import { ProfilePageContainer } from './ProfilePageElements';

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

const ProfilePage = () => {
  return (
    <>
      <ProfilePageContainer>
        <MultipleFormsContainer>
          <FormContainer>
            <FormTitle>Username</FormTitle>
            <FormText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </FormText>
            <FormWrap>
              <FormInput placeholder='Username' />
              <FormBtnWrap>
                <ButtonBasic>Change</ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </FormContainer>
          <FormContainer>
            <FormTitle>Contact email</FormTitle>
            <FormText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </FormText>
            <FormWrap>
              <FormInput placeholder='Email' />
              <FormBtnWrap>
                <ButtonBasic>Change</ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </FormContainer>
        </MultipleFormsContainer>
      </ProfilePageContainer>
    </>
  );
};

export default ProfilePage;
