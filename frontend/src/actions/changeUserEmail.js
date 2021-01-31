import * as api from '../api';
import {
  REQUEST_USEREMAILCHANGE_DATA,
  RECEIVE_USEREMAILCHANGE_DATA,
  CLEAR_USEREMAILCHANGE_DATA,
} from '../constants/actionTypes';

export const changeuseremail = (emailData) => async (dispatch) => {
  dispatch({
    type: REQUEST_USEREMAILCHANGE_DATA,
  });
  try {
    const { data } = await api.changeUserEmail(emailData);

    dispatch({
      type: RECEIVE_USEREMAILCHANGE_DATA,
      userEmailChangeData: data,
      isErrorEmail: false,
      errorMsg: '',
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USEREMAILCHANGE_DATA,
      });
    }, 3200);
  } catch (error) {
    const { data } = error.response;

    dispatch({
      type: RECEIVE_USEREMAILCHANGE_DATA,
      userEmailChangeData: data,
      isErrorEmail: true,
      errorMsg: error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USEREMAILCHANGE_DATA,
      });
    }, 3200);
  }
};
