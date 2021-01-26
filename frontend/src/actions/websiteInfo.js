import * as api from '../api';
import {
  REQUEST_WEBSITEINFO_DATA,
  RECEIVE_WEBSITEINFO_DATA,
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
      errorMsg: error,
    });
  }
};
