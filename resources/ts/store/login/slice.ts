import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { isAxiosError } from 'axios';
import type { LoginCredentials, LoginResponse, LoginState } from '../../types/login';

const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
};

// 非同期 thunk: ログイン処理
export const login = createAsyncThunk('login/login', async (credentials: LoginCredentials, { rejectWithValue }) => {
  try {
    const response = await axios.post<LoginResponse>('/api/login', credentials);
    return response.data.user; // 例: { id, name, email }
  } catch (err) {
    if (isAxiosError(err)) {
      return rejectWithValue(err.response?.data?.message || 'ログインに失敗しました');
    }
    return rejectWithValue('ログインに失敗しました');
  }
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
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
