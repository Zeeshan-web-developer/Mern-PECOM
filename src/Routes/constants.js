import { lazy } from "react";
const Home = lazy(() => import("../Pages/Home/Home.jsx"));
const Cart = lazy(() => import("../Pages/Cart/Cart.jsx"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.jsx"));
const Login = lazy(() => import("../Pages/Auth/Login/Login.jsx"));
const Register = lazy(() => import("../Pages/Auth/Register/Register.jsx"));
const userRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/cart",
    exact: true,
    component: Cart,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "*",
    exact: true,
    component: NotFound,
  },
];

export { userRoutes };
