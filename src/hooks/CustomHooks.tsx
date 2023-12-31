import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENV_VAR } from '@env';
import Instance from '../utils/AxiosInterceptor';
import ToastMessage from '../utils/ToastyMessage';



export const getData = async (endpoint: any) => {
  const url = `${ENV_VAR}/${endpoint}`;
  try {
    const { data } = await (
      await axios.get(url, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2OTRlOGQ0LWY1ZTctNDVmYi1hODAzLWFkYWNkYTc1N2Q1NCIsImlhdCI6MTY5OTI2MzAxNSwiZXhwIjoxNjk5MjY2MDE1fQ.w80reDHzyMvkcWYJT5H3uDgsBsY3HGjRQ-xZXw9-gY4',
        },
      })
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (endpoint: any, data?: any) => {
  const token = await AsyncStorage.getItem('accessToken');
  const url = `${ENV_VAR}/${endpoint}`;
  let response;
  try {

    response = (await Instance.post(url, data, {}))?.data;


    response = ( 
      await Instance.post(url, data, {
      })
    )?.data
  } catch (error: any) {
    response = error.response.data;
    throw new error();
  }

  return response;
};

export const patchData = async (endpoint: any, data?: any) => {
  const token = AsyncStorage.getItem('accessToken');
  const url = `${ENV_VAR}/${endpoint}`;
  let response;
  try {
    response = await (
      await axios.patch(url, data, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2OTRlOGQ0LWY1ZTctNDVmYi1hODAzLWFkYWNkYTc1N2Q1NCIsImlhdCI6MTY5OTI2MzAxNSwiZXhwIjoxNjk5MjY2MDE1fQ.w80reDHzyMvkcWYJT5H3uDgsBsY3HGjRQ-xZXw9-gY4',
        },
      })
    ).data;
  } catch (error: any) {
    response = error.response.data;
  }
  return response;
};

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
