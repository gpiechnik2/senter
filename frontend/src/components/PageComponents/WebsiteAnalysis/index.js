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
          <FormTitle>Website analysis</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='text'
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
