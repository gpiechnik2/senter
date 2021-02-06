import * as api from '../api';
import {
  REQUEST_ANALYSE_DATA,
  RECEIVE_ANALYSE_DATA,
  CLEAR_CHECK_DATA,
  CLEAR_ANALYSE_DATA,
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

    setTimeout(() => {
      dispatch({
        type: CLEAR_CHECK_DATA,
      });
      dispatch({
        type: CLEAR_ANALYSE_DATA,
      });
    }, 100);
  } catch (error) {
    dispatch({
      type: RECEIVE_ANALYSE_DATA,
      analyseData: [],
      isError: true,
      errorMsg: error,
    });
  }
};
