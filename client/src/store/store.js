import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";
import rootSaga from "./saga";
const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();
const middelwares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelwares))
);
sagaMiddleware.run(rootSaga);

export default store;
