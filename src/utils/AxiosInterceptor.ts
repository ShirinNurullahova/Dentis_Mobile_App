import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { postData } from '../hooks/CustomHooks';
import { ENV_VAR } from '@env';
import { navigateTo } from './navigateTo';
import ToastMessage from './ToastyMessage';

const instance = axios.create({
  baseURL: `${ENV_VAR}`,
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => {
    ToastMessage({type:'success',message:response?.data?.message})
    return response;
  },
  async (error) => {
    if (error.response && error.response.statusCode === 401) {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (refreshToken) {
        try {
          const refreshResponse = await postData('/auth/refreshToken', { });
          const newAccessToken = refreshResponse.data.accessToken;
          const newRefreshToken = refreshResponse.data.refreshToken;
          await AsyncStorage.setItem('accessToken', newAccessToken);
          await AsyncStorage.setItem('refreshToken', newRefreshToken);
          error.config.headers.Authorization = 'Bearer ' + newAccessToken;
          return instance(error.config);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
          navigateTo('LoginScreen')
        }
      } else {
        console.error('No refresh token found, redirecting to login screen');
        navigateTo('SignupScreen')
      }
    }
   
      ToastMessage({
        type: 'error',
        message: error?.response?.data?.message,
      });
    
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    console.log(accessToken, 'ELGIZ')
    if (accessToken) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI4NjE5Mzg3LWUyNTQtNGFkZC05ZDUzLTBkYzIzNGMxN2ViMSIsImlhdCI6MTY5OTUxMzQzMiwiZXhwIjoxNjk5NTE2NDMyfQ.P4EybXEr7N0zPsR4sz21Hd2tb1EmwrpCDvhUA5lcsRU`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;
