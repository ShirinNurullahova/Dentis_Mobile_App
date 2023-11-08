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
    console.log('salammmmmmm',response)
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
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default instance;
