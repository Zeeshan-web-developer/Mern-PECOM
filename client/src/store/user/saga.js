import { call, put, takeEvery } from "redux-saga/effects";
import {
  registerUserSuccessful,
  registerUserFailed,
  loginUserFailed,
  loginUserSuccessful,
} from "./actions";
import { REGISTER_USER, LOGIN_USER } from "./types";
import { registerUser, loginUser } from "../../ApiHelpers/apisHelper";

function* signup({ payload }) {
  try {
    const response = yield call(registerUser, payload);
    if (response) {
      yield put(registerUserSuccessful(response));
    }
  } catch (error) {
    yield put(registerUserFailed(error));
    console.log(error);
  }
}
function* login({ payload }) {
  try {
    const response = yield call(loginUser, payload);
    if (response) {
      yield put(loginUserSuccessful(response));
      window.location = "http://localhost:3000/";
    }
  } catch (error) {
    yield put(loginUserFailed(error));
    console.log(error);
  }
}

function* UserSaga() {
  yield takeEvery(REGISTER_USER, signup);
  yield takeEvery(LOGIN_USER, login);
}

export default UserSaga;
