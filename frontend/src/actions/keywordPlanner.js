import * as api from '../api';
import {
  REQUEST_KEYPLANNER_DATA,
  RECEIVE_KEYPLANNER_DATA,
} from '../constants/actionTypes';

export const createkeyword = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_KEYPLANNER_DATA,
  });
  try {
    const { data } = await api.createKeyword(formData);

    dispatch({
      type: RECEIVE_KEYPLANNER_DATA,
      keywordData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_KEYPLANNER_DATA,
      keywordData: [],
      isError: true,
      errorMsg: error,
    });
  }
};
