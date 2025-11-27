import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/slice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // 非シリアライズ値（Date など）の警告を無効化
      serializableCheck: false,
    }),
});

export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
