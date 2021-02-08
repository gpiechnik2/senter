import * as api from '../api';
import {
  AUTH,
  REGISTER_MESSAGE,
  LOGIN_MESSAGE,
  CLEAR_REGISTER,
  CLEAR_LOGIN,
} from '../constants/actionTypes';

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/dashboard');
    window.location.reload();
  } catch (error) {
    const messageRegister = error.response.data.email;

    console.log(error.response);

    dispatch({
      type: REGISTER_MESSAGE,
      payload: messageRegister,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_REGISTER,
      });
    }, 4000);
  }
};

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/dashboard');
    window.location.reload();
  } catch (error) {
    const messageLogin = error.response.data.non_field_errors[0];
    dispatch({
      type: LOGIN_MESSAGE,
      payload: messageLogin,
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_LOGIN,
      });
    }, 4000);
  }
};

export const signgoogle = (tokenGoogle, history) => async (dispatch) => {
  try {
    const { data } = await api.signGoogle(tokenGoogle);

    dispatch({ type: AUTH, data });

    history.push('/dashboard');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
