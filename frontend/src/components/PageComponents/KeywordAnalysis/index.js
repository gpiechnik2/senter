import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getkeywordanalysis } from '../../../actions/keywordAnalysis';

import KeywordData from './KeywordData';

import { KeywordAnalysisContainer } from './KeywordAnalysisElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';
import { GraphicWrap } from '../../Common/UserContentElements';
import { GraphicImg } from '../../Common/ContainerElements';

import graphic from '../../../images/keyword_analysis.jpg';

const initialState = {
  keyword: '',
};

const KeywordAnalysis = () => {
  const { isLoading } = useSelector((state) => state.keywordAnalysisReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getkeywordanalysis(formData));

    setFormData({
      ...formData,
      keyword: '',
    });
  };

  return (
    <>
      <KeywordAnalysisContainer>
        <FormContainer>
          <GraphicWrap>
            <GraphicImg src={graphic} />
          </GraphicWrap>
          <FormTitle>Keyword analysis</FormTitle>
          <FormText>
            You get information about the competition pages. Keyword analysis
            helps you to scan all of the pages that interest you. You can do a
            quick research of first positions for a keywords or keyphrase. This
            gives us the opportunity to „look” what we could change on our
            website to get a similar result.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='text'
              name='keyword'
              aria-describedby='Enter keyword'
              placeholder='Keyword'
              value={formData.keyword}
              onChange={handleChange}
            />
            <FormBtnWrap>
              <ButtonBasic type='submit' disabled={isLoading}>
                Check
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <KeywordData />
      </KeywordAnalysisContainer>
    </>
  );
};

export default KeywordAnalysis;
