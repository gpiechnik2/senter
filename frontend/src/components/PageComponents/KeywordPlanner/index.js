import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createkeyword } from '../../../actions/keywordPlanner';

import KeywordData from './KeywordData';

import Select from 'react-dropdown-select';

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
import { GraphicWrap } from '../../Common/UserContentElements';
import { GraphicImg } from '../../Common/ContainerElements';

import graphic from '../../../images/keyword_planner.jpg';

const initialState = {
  keyword: '',
  language: '',
};

const KeywordPlanner = () => {
  const { isLoading } = useSelector((state) => state.keywordReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

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
    dispatch(createkeyword(formData));

    setFormData({
      ...formData,
      keyword: '',
    });
  };

  return (
    <>
      <KeywordPlannerContainer>
        <FormContainer>
          <GraphicWrap>
            <GraphicImg src={graphic} />
          </GraphicWrap>
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
              value={formData.keyword}
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
              <ButtonBasic
                onClick={() => dispatch({ type: 'CLEAR_KEYWORD_CHECK' })}
                type='submit'
                disabled={isLoading}>
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
