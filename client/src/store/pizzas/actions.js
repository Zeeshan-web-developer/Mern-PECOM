import {
  GET_ALL_PIZZAS,
  GET_ALL_PIZZAS_SUCCESS,
  GET_ALL_PIZZAS_FAILURE,
} from "./types";

export const getAllPizzas = () => {
  return {
    type: GET_ALL_PIZZAS,
  };
};

export const getAllPizzasSuccess = (payload) => ({
  type: GET_ALL_PIZZAS_SUCCESS,
  payload,
});

export const getAllPizzasFailure = (error) => ({
  type: GET_ALL_PIZZAS_FAILURE,
  error,
});
