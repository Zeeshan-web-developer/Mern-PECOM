import {
  INCREMENT_PAGE_COUNT,
  DECREMENT_PAGE_COUNT,
  REGISTER_USER_SUCESSFUL,
  REGISTER_USER,
  REGISTER_USER_FAILED,
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
