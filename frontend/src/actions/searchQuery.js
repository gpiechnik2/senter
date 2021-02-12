import * as api from '../api';
import {
  REQUEST_SEARCH_DATA,
  RECEIVE_SEARCH_DATA,
} from '../constants/actionTypes';

export const searchQuery = (formData) => async (dispatch) => {
  dispatch({
    type: REQUEST_SEARCH_DATA,
  });
  try {
    const { data } = await api.searchQuery(formData);

    dispatch({
      type: RECEIVE_SEARCH_DATA,
      searchData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_SEARCH_DATA,
      searchData: null,
      isError: true,
      errorMsg: error,
    });
  }
};
