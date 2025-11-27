import { axios } from "../../libs/axios";
import type { LoginRequest, LoginResponse } from "../../types/login";

export const callLogin = (params: LoginRequest): Promise<LoginResponse> => {
  return axios.post('/login', params);
};

export const callLogout = (): Promise<LogoutResponse> => {
  return axios.post('/logout');
};

