import { WebScrapingPageContainer } from './WebScrapingPageElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';
import { ButtonBasic } from '../../../Common/ButtonElements';

const WebScrapingPage = () => {
  return (
    <>
      <WebScrapingPageContainer>
        <FormContainer>
          <FormTitle>Headers</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Mozilla/43s/320 - 32 cddd' />
            <FormBtnWrap>
              <ButtonBasic>Change</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </WebScrapingPageContainer>
    </>
  );
};

export default WebScrapingPage;
