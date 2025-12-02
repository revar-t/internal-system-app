// 🔹 ログインフォーム入力値
export interface LoginRequest {
  email: string;
  password: string;
}

// 🔹 APIレスポンス例（Laravel Sanctum想定）
export interface LoginResponse {
  data: {
    user: {
      id: number;
      name: string;
      email: string;
    };
    token?: string; // Laravelの場合はtoken付きになる場合も
  };
  status: number;
}
export interface LogoutResponse {
  status: number;
}

// 🔹 Reduxの状態型
export interface LoginInitialState {
  user: LoginResponse['data']['user'] | null;
  error: boolean;
}
