import axios from 'axios';
import { getToken } from "./components/auth/Storage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: "Bearer null",
  },
});

//https://smartvote124.herokuapp.com/api



const requestHandler = async (request) => {
    let token = await getToken('accessToken');
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
    }

    return request;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};


axiosInstance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);


export default axiosInstance;
