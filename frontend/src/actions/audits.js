import * as api from '../api';
import {
  REQUEST_AUDITS_DATA,
  RECEIVE_AUDITS_DATA,
  DELETE_AUDIT,
  GET_AUDIT,
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

export const deleteAudit = (id) => async (dispatch) => {
  try {
    await api.deleteAudit(id);

    dispatch({ type: DELETE_AUDIT, payload: id });
  } catch (error) {
    dispatch({
      type: RECEIVE_AUDITS_DATA,
      auditsData: null,
      isError: true,
      errorMsg: error,
    });
  }
};

export const getAudit = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_AUDIT, payload: id });
  } catch (error) {
    dispatch({
      type: GET_AUDIT,
      isError: true,
      errorMsg: error,
    });
  }
};
