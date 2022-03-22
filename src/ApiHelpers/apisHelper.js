import { post, get } from "./axiosHelper";
import * as url from "./apiUrls";

// --------------------------------------CRUD--------------------------------------
export const fetchPizzas = () => get(url.GET_ALL_PIZZAS);
export const registerUser = (user) => post(url.REGISTER_USER, user);
export const loginUser = (user) => post(url.LOGIN_USER, user);
