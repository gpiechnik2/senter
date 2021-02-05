import * as api from '../api';
import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
  DELETE_ARTICLE,
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
