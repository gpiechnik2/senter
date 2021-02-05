import * as api from '../api';
import {
  REQUEST_AUDITS_DATA,
  RECEIVE_AUDITS_DATA,
} from '../constants/actionTypes';

export const getaudits = () => async (dispatch) => {
  dispatch({
    type: REQUEST_AUDITS_DATA,
  });
  try {
    const { data } = await api.getAudits();

    dispatch({
      type: RECEIVE_AUDITS_DATA,
      auditsData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_AUDITS_DATA,
      auditsData: null,
      isError: true,
      errorMsg: error,
    });
  }
};
