import * as api from '../api';
import {
  REQUEST_USERAGENTCHANGE_DATA,
  RECEIVE_USERAGENTCHANGE_DATA,
  CLEAR_USERAGENTCHANGE_DATA,
} from '../constants/actionTypes';

export const changeuseragent = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_USERAGENTCHANGE_DATA,
  });
  try {
    const { data } = await api.changeUserAgent(formData);

    dispatch({
      type: RECEIVE_USERAGENTCHANGE_DATA,
      userAgentChangeData: data,
      isError: false,
      errorMsg: '',
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USERAGENTCHANGE_DATA,
      });
    }, 3200);
  } catch (error) {
    const { data } = error.response;

    dispatch({
      type: RECEIVE_USERAGENTCHANGE_DATA,
      userAgentChangeData: data,
      isError: true,
      errorMsg: error,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_USERAGENTCHANGE_DATA,
      });
    }, 3200);
  }
};
