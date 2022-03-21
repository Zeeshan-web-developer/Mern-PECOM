import { call, put, takeEvery } from "redux-saga/effects";
import { registerUserSuccessful, registerUserFailed } from "./actions";
import { REGISTER_USER } from "./types";
import { registerUser } from "../../ApiHelpers/apisHelper";

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

function* UserSaga() {
  yield takeEvery(REGISTER_USER, signup);
}

export default UserSaga;
