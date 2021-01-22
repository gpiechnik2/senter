import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createkeyword } from '../../../actions/keywordPlanner';

import Select from 'react-dropdown-select';

import KeywordData from './KeywordData';

import { KeywordPlannerContainer } from './KeywordPlannerElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
  FormSelectContainer,
} from '../../Common/FormElements';

import { ButtonBasic } from '../../Common/ButtonElements';

const initialState = {
  keyword: '',
  language: '',
};

const KeywordPlanner = () => {
  const { isLoading } = useSelector((state) => state.keywordReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = (selectedOption) => {
    setFormData({
      ...formData,
      language: selectedOption[0].value,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setIsSubmitting(true);
    dispatch(createkeyword(formData));
  };

  return (
    <>
      <KeywordPlannerContainer>
        <FormContainer>
          <FormTitle>Keyword planner</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='text'
              name='keyword'
              placeholder='Keyword'
              aria-describedby='Enter keyword'
              onChange={handleChange}
            />
            <FormSelectContainer>
              <Select
                name='language'
                onChange={handleSelect}
                placeholder='Language'
                required
                searchable={false}
                options={[
                  { key: 1, label: 'Polish', value: 'Polish' },
                  { key: 2, label: 'English', value: 'English' },
                ]}
              />
            </FormSelectContainer>
            <FormBtnWrap>
              <ButtonBasic type='submit' disabled={isLoading}>
                Get keyword
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <KeywordData />
      </KeywordPlannerContainer>
    </>
  );
};

export default KeywordPlanner;
