import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://smartvote124.herokuapp.com",
  headers: {
    Authorization: "Bearer null",
  },
});



const requestHandler = (request) => {
    //let token = JSON.parse(localStorage.getItem('accessToken'));
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
