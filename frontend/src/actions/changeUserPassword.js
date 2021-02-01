import * as api from '../api';
import {
  REQUEST_USEREPASSWORDCHANGE_DATA,
  RECEIVE_USEREPASSWORDCHANGE_DATA,
  CLEAR_USEREPASSWORDCHANGE_DATA,
} from '../constants/actionTypes';

export const changeuserpassword = (passwordData) => async (dispatch) => {
  dispatch({
    type: REQUEST_USEREPASSWORDCHANGE_DATA,
  });
  try {
    const { data } = await api.changeUserPassword(passwordData);

    dispatch({
      type: RECEIVE_USEREPASSWORDCHANGE_DATA,
      userPasswordChangeData: data,
      isErrorPassword: false,
      errorMsg: '',
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USEREPASSWORDCHANGE_DATA,
      });
    }, 3200);
  } catch (error) {
    const { data } = error.response;

    dispatch({
      type: RECEIVE_USEREPASSWORDCHANGE_DATA,
      userPasswordChangeData: data,
      isErrorPassword: true,
      errorMsg: error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USEREPASSWORDCHANGE_DATA,
      });
    }, 3200);
  }
};
