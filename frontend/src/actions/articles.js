import * as api from '../api';
import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
  DELETE_ARTICLE,
  GET_ARTICLE,
  EDIT_ARTICLE,
  CLEAR_EDIT_ARTICLE,
  CLEAR_CHECK_DATA,
} from '../constants/actionTypes';

export const getarticles = () => async (dispatch) => {
  dispatch({
    type: REQUEST_ARTICLES_DATA,
  });
  try {
    const { data } = await api.getArticles();

    dispatch({
      type: RECEIVE_ARTICLES_DATA,
      articlesData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_ARTICLES_DATA,
      articlesData: null,
      isError: true,
      errorMsg: error,
    });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    await api.deleteArticle(id);

    dispatch({ type: DELETE_ARTICLE, payload: id });
  } catch (error) {
    dispatch({
      type: RECEIVE_ARTICLES_DATA,
      articlesData: null,
      isError: true,
      errorMsg: error,
    });
  }
};

export const getArticle = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ARTICLE, payload: id });
  } catch (error) {
    dispatch({
      type: GET_ARTICLE,
      isError: true,
      errorMsg: error,
    });
  }
};

export const editArticle = (id, formData) => async (dispatch) => {
  try {
    const { status } = await api.editArticle(id, formData);

    dispatch({ type: EDIT_ARTICLE, isSuccess: status === 200 ? true : false });

    setTimeout(() => {
      dispatch({
        type: CLEAR_CHECK_DATA,
      });
      dispatch({
        type: CLEAR_EDIT_ARTICLE,
      });
    }, 100);
  } catch (error) {
    dispatch({
      type: EDIT_ARTICLE,
      isError: true,
      errorMsg: error,
    });
  }
};
