import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from '../hooks/custom-store';

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user } = useSelector((state) => state.login);

  // user が存在しない場合はログイン画面にリダイレクト
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ログイン済みならそのまま子コンポーネントを表示
  return children;
}
