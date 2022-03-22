import {
  INCREMENT_PAGE_COUNT,
  DECREMENT_PAGE_COUNT,
  REGISTER_USER,
  REGISTER_USER_SUCESSFUL,
  REGISTER_USER_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCESSFUL,
  LOGIN_USER_FAILED,
  GET_LOGGEDIN_USER,
  GET_LOGGEDIN_USER_SUCESSFUL,
  GET_LOGGEDIN_USER_FAILED,
} from "./types";
const initialState = {
  pageNo: 0,
  user: null,
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT_PAGE_COUNT:
      return {
        ...state,
        pageNo: state.pageNo + 1,
      };
    case DECREMENT_PAGE_COUNT:
      return {
        ...state,
        pageNo: state.pageNo - 1,
      };
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_USER_SUCESSFUL:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTER_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCESSFUL:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_LOGGEDIN_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGGEDIN_USER_SUCESSFUL:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case GET_LOGGEDIN_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
