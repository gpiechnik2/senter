import {
  REQUEST_USEREPASSWORDCHANGE_DATA,
  RECEIVE_USEREPASSWORDCHANGE_DATA,
  CLEAR_USEREPASSWORDCHANGE_DATA,
} from '../constants/actionTypes';

const initalState = {
  userPasswordChangeData: null,
  isLoadingPassword: false,
  isErrorPassword: false,
  errorMsg: '',
};

const changeUserPasswordReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_USEREPASSWORDCHANGE_DATA:
      return {
        ...state,
        isLoadingPassword: true,
        isErrorPassword: false,
        errorMsg: '',
      };
    case RECEIVE_USEREPASSWORDCHANGE_DATA:
      return {
        ...state,
        userPasswordChangeData: action.userPasswordChangeData,
        isLoadingPassword: false,
        isErrorPassword: action.isErrorPassword,
        errorMsg: action.errorMsg,
      };
    case CLEAR_USEREPASSWORDCHANGE_DATA:
      return {
        ...state,
        userPasswordChangeData: null,
        isLoadingPassword: false,
        isErrorPassword: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default changeUserPasswordReducer;
