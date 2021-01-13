import { KeywordAnalysisContainer, AddFont } from './KeywordAnalysisElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';

const KeywordAnalysis = () => {
  return (
    <>
      <KeywordAnalysisContainer>
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
      </KeywordAnalysisContainer>
    </>
  );
};

export default KeywordAnalysis;
