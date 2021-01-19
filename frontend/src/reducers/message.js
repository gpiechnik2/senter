import {
  REGISTER_MESSAGE,
  CLEAR_REGISTER,
  LOGIN_MESSAGE,
  CLEAR_LOGIN,
} from '../constants/actionTypes';

const initialState = {};

const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_MESSAGE:
      return { messageRegister: payload };
    case CLEAR_REGISTER:
      return { ...state, messageRegister: null };
    case LOGIN_MESSAGE:
      return { messageLogin: payload };
    case CLEAR_LOGIN:
      return { ...state, messageLogin: null };

    default:
      return state;
  }
};
export default messageReducer;
