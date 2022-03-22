import { all } from "redux-saga/effects";
import PizzaSaga from "./pizzas/saga";
import UserSaga from "./user/saga";

export default function* rootSaga() {
  yield all([PizzaSaga(), UserSaga()]);
}
