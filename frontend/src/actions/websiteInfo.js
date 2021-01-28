import * as api from '../api';
import {
  REQUEST_WEBSITEINFO_DATA,
  RECEIVE_WEBSITEINFO_DATA,
  CLEAR_WEBSITEINFO_ERROR,
} from '../constants/actionTypes';

export const getwebsiteinfo = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_WEBSITEINFO_DATA,
  });
  try {
    const { data } = await api.getWebsiteInfo(formData);

    dispatch({
      type: RECEIVE_WEBSITEINFO_DATA,
      websiteInfoData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_WEBSITEINFO_DATA,
      websiteInfoData: [],
      isError: true,
      errorMsg: error.response.data,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_WEBSITEINFO_ERROR,
      });
    }, 2500);
  }
};
