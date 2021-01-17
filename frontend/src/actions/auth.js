import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

// Action Creators
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/dashboard');
  } catch (error) {
    console.log(error);
  }
};
