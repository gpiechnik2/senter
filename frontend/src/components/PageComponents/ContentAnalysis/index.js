import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contentcheck } from '../../../actions/contentAnalysisCheck';
import { contentanalyse } from '../../../actions/contentAnalyse';
import { editArticle } from '../../../actions/articles';

import CheckData from './CheckData';

import toast from 'react-hot-toast';

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

import { ButtonBasic, CancelButton } from '../../Common/ButtonElements';

const initialState = {
  keyword: '',
  page_title: '',
  meta_description: '',
  text_to_check: '',
};

const ContentAnalysis = () => {
  const { analyseData, isLoading, isError } = useSelector(
    (state) => state.contentAnalyseReducer
  );
  const { articleToEdit, isEditing, isSuccess } = useSelector(
    (state) => state.articlesReducer
  );
  const [contentForm, setContentForm] = useState(initialState);
  const dispatch = useDispatch();
  const initialRender = useRef(true);

  const clear = () => {
    setContentForm({
      keyword: '',
      page_title: '',
      meta_description: '',
      text_to_check: '',
    });
  };

  const handleChange = (e) => {
    setContentForm({ ...contentForm, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setTimeout(() => {
      dispatch({ type: 'CLEAR_EDIT_ARTICLE' });
      dispatch({ type: 'CLEAR_CHECK_DATA' });
    }, 100);

    clear();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(editArticle(articleToEdit.id, contentForm));
    } else {
      dispatch(contentanalyse(contentForm));
    }
  };

  useEffect(() => {
    if (articleToEdit) setContentForm(articleToEdit);
  }, [articleToEdit]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      dispatch(contentcheck(contentForm));
    }
  }, [dispatch, contentForm]);

  useEffect(() => {
    if (analyseData && !isError) {
      toast.success('Article saved successfully!');
      clear();
    } else if (analyseData && isError) {
      toast.error(`We couldn't save that one.`);
    } else if (isSuccess) {
      toast.success('Article edited successfully!');
      clear();
    }
  }, [analyseData, isError, isSuccess]);

  return (
    <>
      <ContentAnalysisContainer>
        <FormContainer onSubmit={handleSubmit}>
          <FormWrapper>
            <FormItemsWrap>
              <FormInput
                name='keyword'
                placeholder='Słowo bądź fraza kluczowa'
                required
                onChange={handleChange}
                value={contentForm.keyword}
              />
              <FormInput
                name='page_title'
                placeholder='Page title'
                required
                onChange={handleChange}
                value={contentForm.page_title}
              />
              <MetaDiv>
                <MetaP>Meta description</MetaP>
                <MetaTextArea
                  name='meta_description'
                  cols='30'
                  rows='10'
                  required
                  onChange={handleChange}
                  value={contentForm.meta_description}
                />
              </MetaDiv>
              <ContentDiv>
                <ContentP>Content</ContentP>
                <ContentTextArea
                  name='text_to_check'
                  cols='30'
                  rows='10'
                  required
                  onChange={handleChange}
                  value={contentForm.text_to_check}
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
            {isEditing ? (
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            ) : null}
            <ButtonBasic type='submit' disabled={isLoading}>
              Save
            </ButtonBasic>
          </BtnWrap>
        </FormContainer>
      </ContentAnalysisContainer>
    </>
  );
};

export default ContentAnalysis;
