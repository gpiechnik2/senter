import * as api from '../api';
import {
  REQUEST_ANALYSE_DATA,
  RECEIVE_ANALYSE_DATA,
  CLEAR_CHECK_DATA,
} from '../constants/actionTypes';

export const contentanalyse = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_ANALYSE_DATA,
  });
  try {
    const { data } = await api.contentAnalyse(formData);

    dispatch({
      type: RECEIVE_ANALYSE_DATA,
      analyseData: data,
      isError: false,
      errorMsg: '',
    });
    dispatch({
      type: CLEAR_CHECK_DATA,
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_ANALYSE_DATA,
      analyseData: [],
      isError: true,
      errorMsg: error,
    });
  }
};
