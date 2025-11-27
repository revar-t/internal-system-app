import { useDispatch as useReduxDispatch, useSelector as useReduxSelector, shallowEqual } from 'react-redux';
import store from '../stores/store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

/**
 * Redux の Dispatch 関数にアクセスするためのフック
 * @returns - Redux ストアの Dispatch 関数
 */
export const useDispatch = () => useReduxDispatch<AppDispatch>();

/**
 * Redux ストアの state から値を取得するためのカスタムフック。
 * useSelector と同じ使い方で、型安全かつ浅い比較(shallowEqual)による不要な再レンダリングを防ぐ。
 * @template T
 * @param {(state: RootState) => T} selector - Redux ステートから特定の値を選択するセレクター関数
 * @returns {T} - 選択されたステートの値
 */
export const useSelector = <T>(selector: (state: RootState) => T): T => {
  return useReduxSelector(selector, shallowEqual);
};
