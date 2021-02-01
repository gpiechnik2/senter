import * as api from '../api';
import {
  REQUEST_CONTACTEMAILCHANGE_DATA,
  RECEIVE_CONTACTEMAILCHANGE_DATA,
  CLEAR_CONTACTEMAILCHANGE_DATA,
} from '../constants/actionTypes';

export const changecontactemail = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_CONTACTEMAILCHANGE_DATA,
  });
  try {
    const { data } = await api.changeContactEmail(formData);

    dispatch({
      type: RECEIVE_CONTACTEMAILCHANGE_DATA,
      contactEmailChangeData: data,
      isError: false,
      errorMsg: '',
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_CONTACTEMAILCHANGE_DATA,
      });
    }, 3200);
  } catch (error) {
    const { data } = error.response;

    dispatch({
      type: RECEIVE_CONTACTEMAILCHANGE_DATA,
      contactEmailChangeData: data,
      isError: true,
      errorMsg: error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_CONTACTEMAILCHANGE_DATA,
      });
    }, 3200);
  }
};
