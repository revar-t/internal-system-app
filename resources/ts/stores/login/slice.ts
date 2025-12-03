import { createSlice } from '@reduxjs/toolkit';
import { callLogin, callLogout } from '../../features/login/api';
import { createAsyncThunk } from '../../libs/toolkit';
import type { LoginInitialState, LoginRequest, LoginResponse, LogoutResponse } from '../../types/login';

// F5リロードやタブ再読み込みでもログイン状態を維持するため、
// sessionStorage から保存済みユーザー情報を取得する。
// （Redux の state はリロードで初期化されるため、ここで復元する必要がある）
const savedUser = sessionStorage.getItem('user');

// Redux の初期状態。
// sessionStorage に user があればログイン状態として扱い、
// なければ通常どおり未ログイン（user: null）として開始する。
const initialState: LoginInitialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  error: false,
  email: '',
  password: '',
};

export const callLoginAsync = createAsyncThunk<LoginRequest, LoginResponse>('login/callLogin', async (params) => {
  return await callLogin(params);
});

export const callLogoutAsync = createAsyncThunk<void, LogoutResponse>('login/callLogout', async () => {
  return await callLogout();
});

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(callLoginAsync.fulfilled, (state, action) => {
        const {user, token} = action.payload.data;
        console.log(action.payload);
        state.user = user;
        const statusCode = action.payload.status;
        if(statusCode === 200) {
          sessionStorage.setItem('user_id', String(user.id));
          sessionStorage.setItem('user', JSON.stringify(user));
          if(token) {
            sessionStorage.setItem('token', token);
          }
          state.email = '';
          state.password = '';
        }
        state.error = false;
      })
      .addCase(callLoginAsync.rejected, (state) => {
        state.error = true;
      })
      .addCase(callLogoutAsync.fulfilled, (state) => {
        state.user = null;
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
      });
  },
});

export const {
  logout,
  setEmail,
  setPassword,
} = loginSlice.actions;
export default loginSlice.reducer;
