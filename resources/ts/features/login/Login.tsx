// src/features/auth/LoginPage.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Button, TextField, Box, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "@/store/login/slice";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useAppSelector((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ログイン成功時にダッシュボードへ
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h5" gutterBottom>
        ログイン
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
        <TextField
          fullWidth
          margin="normal"
          label="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          type="password"
          label="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "ログイン"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
