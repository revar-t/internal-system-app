import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import P from '../../components/p';
import theme from '../../config/theme-config';
import { useDispatch, useSelector } from '../../hooks/custom-store';
import { callLoginAsync } from '../../stores/login/slice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.login);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ ログイン成功時にダッシュボードへ
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(callLoginAsync({ email, password }));
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh'>
      <P v='h4'>ログイン</P>

      <Box component='form' onSubmit={handleSubmit} sx={{ width: 300 }}>
        <TextField
          fullWidth
          margin='normal'
          label='メールアドレス'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          margin='normal'
          type='password'
          label='パスワード'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <P v='body2' sx={{ color: theme.palette.error.main }}>
            ログインに失敗しました。もう一度お試しください
          </P>
        )}

        <Button type='submit' variant='contained' color='primary' fullWidth sx={{ mt: 2 }}>
          ログイン
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
