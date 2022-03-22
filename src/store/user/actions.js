import {
  INCREMENT_PAGE_COUNT,
  DECREMENT_PAGE_COUNT,
  REGISTER_USER_SUCESSFUL,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  LOGIN_USER_SUCESSFUL,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  GET_LOGGEDIN_USER_SUCESSFUL,
  GET_LOGGEDIN_USER,
  GET_LOGGEDIN_USER_FAILED,
} from "./types";

export const incrementPageCount = () => ({
  type: INCREMENT_PAGE_COUNT,
});

export const decrementPageCount = () => ({
  type: DECREMENT_PAGE_COUNT,
});

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const registerUserSuccessful = (user) => ({
  type: REGISTER_USER_SUCESSFUL,
  payload: user,
});

export const registerUserFailed = (error) => ({
  type: REGISTER_USER_FAILED,
  payload: error,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const loginUserSuccessful = (user) => ({
  type: LOGIN_USER_SUCESSFUL,
  payload: user,
});

export const loginUserFailed = (error) => ({
  type: LOGIN_USER_FAILED,
  payload: error,
});

export const getLoggedInUser = () => ({
  type: GET_LOGGEDIN_USER,
});

export const getLoggedInUserSuccessful = (user) => ({
  type: GET_LOGGEDIN_USER_SUCESSFUL,
  payload: user,
});

export const getLoggedInUserFailed = (error) => ({
  type: GET_LOGGEDIN_USER_FAILED,
  payload: error,
});
