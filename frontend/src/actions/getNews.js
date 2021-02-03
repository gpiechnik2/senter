import * as api from '../api';
import { REQUEST_NEWS_DATA, RECEIVE_NEWS_DATA } from '../constants/actionTypes';

export const getnews = () => async (dispatch) => {
  dispatch({
    type: REQUEST_NEWS_DATA,
  });
  try {
    const { data } = await api.getNews();

    dispatch({
      type: RECEIVE_NEWS_DATA,
      newsData: data,
      isError: false,
      errorMsg: '',
    });
  } catch (error) {
    dispatch({
      type: RECEIVE_NEWS_DATA,
      newsData: null,
      isError: true,
      errorMsg: error,
    });
  }
};
