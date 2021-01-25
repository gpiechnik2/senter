import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { contentcheck } from '../../../actions/contentAnalysisCheck';

import CheckData from './CheckData';

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
} from '../../Common/AnalysisElements';

import { ButtonBasic } from '../../Common/ButtonElements';

const initialState = {
  keyword: '',
  page_title: '',
  meta_description: '',
  text_to_check: '',
};

const ContentAnalysis = () => {
  const [checkForm, setCheckForm] = useState(initialState);
  const dispatch = useDispatch();
  const initialRender = useRef(true);

  const onChange = (e) => {
    setCheckForm({ ...checkForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      dispatch(contentcheck(checkForm));
      console.log('w useeffect', checkForm);
    }
  }, [dispatch, checkForm]);

  return (
    <>
      <ContentAnalysisContainer>
        <FormContainer>
          <FormWrapper>
            <FormItemsWrap>
              <FormInput
                name='keyword'
                placeholder='Słowo bądź fraza kluczowa'
                required
                onChange={onChange}
              />
              <FormInput
                name='page_title'
                placeholder='Page title'
                required
                onChange={onChange}
              />
              <MetaDiv>
                <MetaP>Meta description</MetaP>
                <MetaTextArea
                  name='meta_description'
                  cols='30'
                  rows='10'
                  required
                  onChange={onChange}
                />
              </MetaDiv>
              <ContentDiv>
                <ContentP>Content</ContentP>
                <ContentTextArea
                  name='text_to_check'
                  cols='30'
                  rows='10'
                  required
                  onChange={onChange}
                />
              </ContentDiv>
            </FormItemsWrap>
          </FormWrapper>
          <ExpandableAnalysisContainer>
            <MessageAnalysisWrapper>
              <CheckData />
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
