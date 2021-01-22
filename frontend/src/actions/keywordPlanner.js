import * as api from '../api';
import { REQUEST_DATA, RECEIVE_DATA } from '../constants/actionTypes';

export const createkeyword = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_DATA,
  });
  try {
    const { data } = await api.createKeyword(formData);

    dispatch({
      type: RECEIVE_DATA,
      keywordData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_DATA,
      keywordData: [],
      isError: true,
      errorMsg: error,
    });
  }
};
