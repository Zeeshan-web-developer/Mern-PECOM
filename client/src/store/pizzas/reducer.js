import {
  GET_ALL_PIZZAS,
  GET_ALL_PIZZAS_SUCCESS,
  GET_ALL_PIZZAS_FAILURE,
} from "./types";

const initialState = {
  pizzas: [],
  loading: false,
  error: null,
};

const PizzaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PIZZAS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_PIZZAS_SUCCESS:
      return {
        ...state,
        pizzas: payload,
        loading: false,
        error: null,
      };
    case GET_ALL_PIZZAS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
      break;
    default:
      return state;
  }
};

export default PizzaReducer;
