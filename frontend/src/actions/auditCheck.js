import * as api from '../api';
import {
  REQUEST_AUDITCHECK_DATA,
  RECEIVE_AUDITCHECK_DATA,
  CLEAR_AUDITCHECK_ERROR,
} from '../constants/actionTypes';

export const getaudit = (formData) => async (dispatch) => {
  dispatch({
    type: CLEAR_AUDITCHECK_ERROR,
  });
  dispatch({
    type: REQUEST_AUDITCHECK_DATA,
  });
  try {
    const { data } = await api.getAudit(formData);

    dispatch({
      type: RECEIVE_AUDITCHECK_DATA,
      auditCheckData: data,
      isError: false,
      errorMsg: '',
    });
    if (data.analysis.length === 0) {
      setTimeout(() => {
        dispatch({
          type: CLEAR_AUDITCHECK_ERROR,
        });
      }, 4000);
    }
  } catch (error) {
    dispatch({
      type: RECEIVE_AUDITCHECK_DATA,
      auditCheckData: [],
      isError: true,
      errorMsg: error.response.data,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_AUDITCHECK_ERROR,
      });
    }, 2500);
  }
};
