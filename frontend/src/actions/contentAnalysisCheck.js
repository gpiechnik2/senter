import * as api from '../api';
import { REQUEST_DATA, RECEIVE_DATA } from '../constants/actionTypes';

export const contentcheck = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_DATA,
  });
  try {
    const { data } = await api.contentCheck(formData);

    dispatch({
      type: RECEIVE_DATA,
      checkData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_DATA,
      checkData: [],
      isError: true,
      errorMsg: error,
    });
  }
};
