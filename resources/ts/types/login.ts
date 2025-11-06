// 🔹 ログインフォーム入力値
export interface LoginCredentials {
  email: string;
  password: string;
}

// 🔹 APIレスポンス例（Laravel Sanctum想定）
export interface LoginResponse {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token?: string; // Laravelの場合はtoken付きになる場合も
}

// 🔹 Reduxの状態型
export interface LoginState {
  user: LoginResponse["user"] | null;
  loading: boolean;
  error: string | null;
}
