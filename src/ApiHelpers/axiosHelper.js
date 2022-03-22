import axios from "axios";
const API_URL = "http://localhost:9000/api/v1";

// setting the base url for axios
const axiosApi = axios.create({
  baseURL: API_URL,
});

// // setting the headers for axios
// // axiosApi.defaults.headers.common[
// //   "Authorization"
// // ] = `Bearer ${localStorage.getItem("token")}`;

// // these are just middleware functions that will be called before the request is sent
// // Add a request interceptor
// axiosApi.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     console.log("request interceptor", config);
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
// // add response interceptor to handle the error response from server
// // this interceptor will be called before the response is returned to the user
// // axios intterceptor response takes two arguments two functions one for success and one for error
// axiosApi.interceptors.response.use(
//   function (response) {
//     console.log("response", response);
//     return response;
//   },
//   function (error) {
//     if (error.response.status === 401) {
//       // localStorage.removeItem('token');
//       // window.location.reload();
//     }
//     return Promise.reject(error);
//   }
// );

// --------------------------------------SEND REQUEST TO SERVER--------------------------------------
export async function post(url, data, config = {}) {
  let res = await axiosApi.post(url, { ...data }, { ...config });
  return res.data;
}

export async function get(url, config = {}) {
  let res = await axiosApi.get(url, {}, { ...config });
  return res.data;
}
