import {
  REQUEST_CONTACTEMAILCHANGE_DATA,
  RECEIVE_CONTACTEMAILCHANGE_DATA,
  CLEAR_CONTACTEMAILCHANGE_DATA,
} from '../constants/actionTypes';

const initalState = {
  contactEmailChangeData: null,
  isLoading: false,
  isError: false,
  errorMsg: '',
};

const changeContactEmailReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST_CONTACTEMAILCHANGE_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMsg: '',
      };
    case RECEIVE_CONTACTEMAILCHANGE_DATA:
      return {
        ...state,
        contactEmailChangeData: action.contactEmailChangeData,
        isLoading: false,
        isError: action.isError,
        errorMsg: action.errorMsg,
      };
    case CLEAR_CONTACTEMAILCHANGE_DATA:
      return {
        ...state,
        contactEmailChangeData: null,
        isLoading: false,
        isError: false,
        errorMsg: '',
      };
    default:
      return state;
  }
};
export default changeContactEmailReducer;
