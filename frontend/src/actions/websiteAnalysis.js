import * as api from '../api';
import {
  REQUEST_WEBSITEANALYSIS_DATA,
  RECEIVE_WEBSITEANALYSIS_DATA,
  CLEAR_WEBSITEANALYSIS_DATA,
} from '../constants/actionTypes';

export const getwebsiteanalysis = (formData) => async (dispatch) => {
  dispatch({
    type: CLEAR_WEBSITEANALYSIS_DATA,
  });
  dispatch({
    type: REQUEST_WEBSITEANALYSIS_DATA,
  });
  try {
    const { data } = await api.getWebsiteAnalysis(formData);

    dispatch({
      type: RECEIVE_WEBSITEANALYSIS_DATA,
      websiteAnalysisData: data,
      isError: false,
      errorMsg: '',
    });
    if (data.analysis.length === 0) {
      setTimeout(() => {
        dispatch({
          type: CLEAR_WEBSITEANALYSIS_DATA,
        });
      }, 4000);
    }
  } catch (error) {
    dispatch({
      type: RECEIVE_WEBSITEANALYSIS_DATA,
      websiteAnalysisData: null,
      isError: true,
      errorMsg: error.response.data,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_WEBSITEANALYSIS_DATA,
      });
    }, 2500);
  }
};
