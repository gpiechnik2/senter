import {
  ContentAnalysisContainer,
  FormContainer,
  BtnWrap,
  FormWrapper,
  FormItemsWrap,
  FormInput,
  MetaDiv,
  MetaP,
  MetaTextArea,
  ContentDiv,
  ContentP,
  ContentTextArea,
} from './ContentAnalysisElements';

import {
  ExpandableAnalysisContainer,
  MessageAnalysisWrapper,
  MessageAnalysisElementWrap,
  StatusElement,
  StatusBar,
  StatusText,
  MessageElement,
  MessageText,
} from '../../Common/AnalysisElements';

import { ButtonBasic } from '../../Common/ButtonElements';

import { analysisExample } from './Data';

const ContentAnalysis = () => {
  return (
    <>
      <ContentAnalysisContainer>
        <FormContainer>
          <FormWrapper>
            <FormItemsWrap>
              <FormInput placeholder='Tytuł*' required />
              <FormInput placeholder='Słowo bądź fraza kluczowa' />
              <FormInput placeholder='Page title' />
              <MetaDiv>
                <MetaP>Meta description</MetaP>
                <MetaTextArea cols='30' rows='10' />
              </MetaDiv>
              <ContentDiv>
                <ContentP>Content</ContentP>
                <ContentTextArea cols='30' rows='10' />
              </ContentDiv>
            </FormItemsWrap>
          </FormWrapper>
          <ExpandableAnalysisContainer>
            <MessageAnalysisWrapper>
              <MessageAnalysisElementWrap>
                <StatusElement>
                  <StatusBar />
                  <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
                </StatusElement>
                <MessageElement>
                  <MessageText style={{ fontWeight: 'bold' }}>
                    Message
                  </MessageText>
                </MessageElement>
              </MessageAnalysisElementWrap>
              {analysisExample.map((analysis) => (
                <MessageAnalysisElementWrap key={analysis.message}>
                  <StatusElement>
                    <StatusBar style={{ borderColor: '#72BC39' }} />
                    <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                      {analysis.status}
                    </StatusText>
                  </StatusElement>
                  <MessageElement>
                    <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                      {analysis.message}
                    </MessageText>
                  </MessageElement>
                </MessageAnalysisElementWrap>
              ))}
            </MessageAnalysisWrapper>
          </ExpandableAnalysisContainer>
          <BtnWrap>
            <ButtonBasic>Save</ButtonBasic>
          </BtnWrap>
        </FormContainer>
      </ContentAnalysisContainer>
    </>
  );
};

export default ContentAnalysis;
