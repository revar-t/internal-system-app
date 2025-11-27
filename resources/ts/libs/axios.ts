import customAxios from 'axios';
import type {AxiosResponse} from 'axios';
import camelCaseConverter from '../utils/camel-case-converter';

export const axios = customAxios.create({
  baseURL: `/api/`,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

axios.interceptors.response.use((response) => {
  // レスポンスオブジェクトのキーの値をキャメルケースに変換
  const camelCaseResponseData = camelCaseConverter(response.data as Record<string, unknown>);
  // eslint-disable-next-line
  const camelCaseResponse: AxiosResponse<any, any> = {
    ...response,
    data: camelCaseResponseData,
  };
  return camelCaseResponse;
});
