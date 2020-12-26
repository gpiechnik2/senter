import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';

import { KeywordsAnalysisContainer, AddFont } from './KeywordsAnalysisElements';

const KeywordsAnalysis = () => {
  return (
    <>
      <KeywordsAnalysisContainer>
        <FormContainer>
          <FormTitle>Dodaj frazę bądź słowo kluczowe</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Fraza bądź słowo kluczowe' />
            <FormBtnWrap>
              <ButtonBasic>
                <AddFont />
                Dodaj
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </KeywordsAnalysisContainer>
    </>
  );
};

export default KeywordsAnalysis;
