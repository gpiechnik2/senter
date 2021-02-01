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
          <FormTitle>Keyword analysis</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
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
