import { call, put, takeEvery } from "redux-saga/effects";
import { getAllPizzasSuccess, getAllPizzasFailure } from "./actions";
import { GET_ALL_PIZZAS } from "./types";
import { fetchPizzas } from "../../ApiHelpers/apisHelper";

function* getAllPizzas() {
  try {
    const response = yield call(fetchPizzas);
    if (response) {
      yield put(getAllPizzasSuccess(response));
    }
  } catch (error) {
    yield put(getAllPizzasFailure(error));
    console.log(error);
  }
}

function* PizzaSaga() {
  yield takeEvery(GET_ALL_PIZZAS, getAllPizzas);
}

export default PizzaSaga;
