import { createSlice } from '@reduxjs/toolkit';
import { callLogin, callLogout } from '../../features/login/api';
import { createAsyncThunk } from '../../libs/toolkit';
import type { LoginInitialState, LoginRequest, LoginResponse } from '../../types/login';

const initialState: LoginInitialState = {
  user: null,
  error: false,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(callLoginAsync.fulfilled, (state, action) => {
        const user = action.payload.data.user;
        console.log(action.payload);
        state.user = user;
        const statusCode = action.payload.status;
        if(statusCode === 200) {
          sessionStorage.setItem('user_id', String(user.id));
        }
        state.error = false;
      })
      .addCase(callLoginAsync.rejected, (state) => {
        state.error = true;
      })
      .addCase(callLogoutAsync.fulfilled, (state) => {
        state.user = null;
        sessionStorage.removeItem('user_id');
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
