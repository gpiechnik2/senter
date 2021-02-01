import * as api from '../api';
import {
  REQUEST_CREATEAUDIT_DATA,
  RECEIVE_CREATEAUDIT_DATA,
  CLEAR_CREATEAUDIT_DATA,
  CLEAR_AUDITCHECK_ERROR,
} from '../constants/actionTypes';

export const createaudit = (saveData) => async (dispatch) => {
  dispatch({
    type: REQUEST_CREATEAUDIT_DATA,
  });
  try {
    const { data } = await api.createAudit(saveData);

    dispatch({
      type: RECEIVE_CREATEAUDIT_DATA,
      createAuditData: data,
      isErrorSave: false,
      errorMsgSave: '',
    });
    dispatch({
      type: CLEAR_AUDITCHECK_ERROR,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_CREATEAUDIT_DATA,
      });
    }, 3250);
  } catch (error) {
    dispatch({
      type: RECEIVE_CREATEAUDIT_DATA,
      createAuditData: null,
      isErrorSave: true,
      errorMsgSave: error,
    });
  }
};
