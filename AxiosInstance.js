import axios from 'axios';
import { getToken } from "./components/auth/Storage";

const axiosInstance = axios.create({
  baseURL: "https://smartvote124.herokuapp.com/api",
  headers: {
    Authorization: "Bearer null",
  },
});

//



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
