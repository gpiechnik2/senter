import * as api from '../api';
import {
  REQUEST_KEYWORDANALYSIS_DATA,
  RECEIVE_KEYWORDANALYSIS_DATA,
  CLEAR_KEYWORDANALYSIS_DATA,
} from '../constants/actionTypes';

export const getkeywordanalysis = (formData) => async (dispatch) => {
  dispatch({
    type: CLEAR_KEYWORDANALYSIS_DATA,
  });
  dispatch({
    type: REQUEST_KEYWORDANALYSIS_DATA,
  });
  try {
    const { data } = await api.getKeywordAnalysis(formData);

    dispatch({
      type: RECEIVE_KEYWORDANALYSIS_DATA,
      keywordAnalysisData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_KEYWORDANALYSIS_DATA,
      keywordAnalysisData: null,
      isError: true,
      errorMsg: error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_KEYWORDANALYSIS_DATA,
      });
    }, 3200);
  }
};
