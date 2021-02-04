import * as api from '../api';
import {
  REQUEST_ARTICLES_DATA,
  RECEIVE_ARTICLES_DATA,
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
