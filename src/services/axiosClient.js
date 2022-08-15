import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const configFile = {
  'content-type': 'multipart/form-data',
};
export const config = {
  'content-type': 'application/json',
};

const axiosClient = axios.create({
  baseURL: 'http://10.0.106.37:3001/api/v1/',
});
axiosClient.interceptors.request.use(
  async function (config) {
    // const token = (await cookies.get('accessToken')) ? cookies.get('accessToken') : null;
    // config.headers.Authorization = token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
