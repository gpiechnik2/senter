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

const PrivatePage = () => {
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
            <FormWrap>
              <FormInput placeholder='Username' />
              <FormBtnWrap>
                <ButtonBasic>Change</ButtonBasic>
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
