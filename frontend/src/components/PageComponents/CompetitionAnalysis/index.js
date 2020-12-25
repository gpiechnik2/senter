import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';

import { ButtonBasic } from '../../Common/ButtonElements';

import { CompetitionAnalysisContainer } from './CompetitionAnalysisElements';

const CompetitionAnalysis = () => {
  return (
    <>
      <CompetitionAnalysisContainer>
        <FormContainer>
          <FormTitle>Analiza konkurencji</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='http://analize.me' />
            <FormBtnWrap>
              <ButtonBasic>Analizuj</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </CompetitionAnalysisContainer>
    </>
  );
};

export default CompetitionAnalysis;
