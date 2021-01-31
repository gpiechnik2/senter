import {
  REQUEST_USEREMAILCHANGE_DATA,
  RECEIVE_USEREMAILCHANGE_DATA,
  CLEAR_USEREMAILCHANGE_DATA,
} from '../constants/actionTypes';

const initalState = {
  userEmailChangeData: null,
  isLoadingEmail: false,
  isErrorEmail: false,
  errorMsg: '',
};

const changeUserEmailReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_USEREMAILCHANGE_DATA:
      return {
        ...state,
        isLoadingEmail: true,
        isErrorEmail: false,
        errorMsg: '',
      };
    case RECEIVE_USEREMAILCHANGE_DATA:
      return {
        ...state,
        userEmailChangeData: action.userEmailChangeData,
        isLoadingEmail: false,
        isErrorEmail: action.isErrorEmail,
        errorMsg: action.errorMsg,
      };
    case CLEAR_USEREMAILCHANGE_DATA:
      return {
        ...state,
        userEmailChangeData: null,
        isLoadingEmail: false,
        isErrorEmail: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default changeUserEmailReducer;
