import * as api from '../api';
import {
  REQUEST_KEYWORDS_DATA,
  RECEIVE_KEYWORDS_DATA,
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
