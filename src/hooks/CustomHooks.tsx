import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENV_VAR } from '@env';

export const getData = async (endpoint: any) => {
  const url = `${ENV_VAR}/${endpoint}`;
  try {
    const { data } = await (await axios.get(url)).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (endpoint: any, data?: any) => {
  const token = AsyncStorage.getItem('accessToken');
  const url = `${ENV_VAR}/${endpoint}`;
  let response;
  try {
    console.log('tes1');
    response = (await axios.post(url, data, {}))?.data;
    console.log(response);
  } catch (error: any) {
    console.log(error);

    response = error.response.data;
  }
  return response;
};

// export const patchData = async (endpoint, data) => {
//   const token = localStorage.getItem("accessToken");
//   const url = `${process.env.REACT_APP_URL}/${endpoint}`;
//   let response;
//   try {
//     response = await (
//       await axios.patch(url, data, {
//         headers: {
//           accessToken: `Bearer ${token}`,
//         },
//       })
//     ).data;
//   } catch (error) {
//     response = error.response.data;
//   }
//   return response;
// };

// export const deleteData = async (endpoint) => {
//   const token = localStorage.getItem("accessToken");
//   const url = `${process.env.REACT_APP_URL}/${endpoint}`;
//   let response;
//   try {
//     response = await (await axios.delete(url,{
//       headers: {
//         accessToken: `Bearer ${token}`,
//       },
//     })).data;
//   } catch (error) {
//     response = error.response.data;
//   }
//   return response;
// };
