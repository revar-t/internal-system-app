import { createAsyncThunk as reduxjsToolkitCreateAsyncThunk } from '@reduxjs/toolkit';
import type { AsyncThunk } from '@reduxjs/toolkit';
import store from '../stores/store';
import camelCaseConverter from '../utils/camel-case-converter';

export type RootState = ReturnType<typeof store.getState>;

// Redux Toolkit の createAsyncThunk に対し共通処理を追加
const createAsyncThunk = <ThunkArg, Returned>(
  /** 非同期処理を行う関数の一意の識別名 */
  typePrefix: string,
  /** 実行される非同期関数 */
  callBack: (params: ThunkArg) => Promise<Returned>,
): AsyncThunk<Returned, ThunkArg, { state: RootState }> => {
  return reduxjsToolkitCreateAsyncThunk<Returned, ThunkArg, { state: RootState }>(typePrefix, async (params, thunkAPI) => {

    try {
      const response = await callBack(params);

      return response;
      // eslint-disable-next-line
    } catch (error: any) {
      const camelCaseResponse = camelCaseConverter(error.response as Record<string, unknown>);
      return thunkAPI.rejectWithValue({ data: camelCaseResponse.data, status: camelCaseResponse.status });
    }
  });
};

export { createAsyncThunk };
