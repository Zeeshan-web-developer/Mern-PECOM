import { combineReducers } from "redux";
import PizzaReducer from "./pizzas/reducer";
import UserReducer from "./user/reducer";
const rootReducer = combineReducers({
  pizzas: PizzaReducer,
  user: UserReducer,
});

export default rootReducer;
