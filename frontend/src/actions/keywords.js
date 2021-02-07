import * as api from '../api';
import {
  REQUEST_KEYWORDS_DATA,
  RECEIVE_KEYWORDS_DATA,
  DELETE_KEYWORD,
  GET_KEYWORD,
} from '../constants/actionTypes';

export const getkeywords = () => async (dispatch) => {
  dispatch({
    type: REQUEST_KEYWORDS_DATA,
  });
  try {
    const { data } = await api.getKeywords();

    dispatch({
      type: RECEIVE_KEYWORDS_DATA,
      keywordsData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_KEYWORDS_DATA,
      keywordsData: null,
      isError: true,
      errorMsg: error,
    });
  }
};

export const deleteKeyword = (id) => async (dispatch) => {
  try {
    await api.deleteKeyword(id);

    dispatch({ type: DELETE_KEYWORD, payload: id });
  } catch (error) {
    dispatch({
      type: RECEIVE_KEYWORDS_DATA,
      keywordsData: null,
      isError: true,
      errorMsg: error,
    });
  }
};

export const getKeyword = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_KEYWORD, payload: id });
  } catch (error) {
    dispatch({
      type: GET_KEYWORD,
      isError: true,
      errorMsg: error,
    });
  }
};
