import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getwebsiteanalysis } from '../../../actions/websiteAnalysis';

import WebsiteAnalysisData from './WebsiteAnalysisData';

import { WebAnalysisContainer } from './WebsiteAnalysisElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';
import { GraphicImg } from '../../Common/ContainerElements';
import { GraphicWrap } from '../../Common/UserContentElements';

import graphic from '../../../images/website_analysis.jpg';

const initialState = {
  url: '',
};

const WebsiteAnalysis = () => {
  const { websiteAnalysisData, isLoading } = useSelector(
    (state) => state.websiteAnalysisReducer
  );
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getwebsiteanalysis(formData));

    setFormData({
      ...formData,
      url: '',
    });
  };

  const isDisabled = isLoading || websiteAnalysisData?.analysis.length === 0;

  return (
    <>
      <WebAnalysisContainer>
        <FormContainer>
          <GraphicWrap>
            <GraphicImg src={graphic} />
          </GraphicWrap>
          <FormTitle>Website analysis</FormTitle>
          <FormText>
            It allows you to invetigate the web page code for SEO. You get an
            analysis and tips on how to improve the performance of the page and
            increase their position in search engine. The analysis is detailed
            and provides information of specific actions.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='url'
              name='url'
              aria-describedby='Enter url'
              placeholder='Url'
              value={formData.url}
              onChange={handleChange}
            />
            <FormBtnWrap>
              <ButtonBasic type='submit' disabled={isDisabled}>
                Check
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <WebsiteAnalysisData />
      </WebAnalysisContainer>
    </>
  );
};

export default WebsiteAnalysis;
