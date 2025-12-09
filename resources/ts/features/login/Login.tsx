import { Box, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import P from '../../components/p';
import { logo } from '../../config/image-config';
import theme from '../../config/theme-config';
import { useDispatch, useSelector } from '../../hooks/custom-store';
import { callLoginAsync, setInputField } from '../../stores/login/slice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, email, password } = useSelector((state) => state.login);

  // ✅ ログイン成功時にダッシュボードへ
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const dispatchSetInputField = (value: string, inputFieldType: 'email' | 'password') => {
    dispatch(setInputField({ value, inputFieldType }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(callLoginAsync({ email, password }));
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh'>
      <Box component='img' src={logo.src} alt={logo.alt} sx={{ mb: '48px' }} />
      <Box sx={{ width: 300 }}>
        <TextField
          fullWidth
          label='メールアドレス'
          value={email}
          onChange={(e) => dispatchSetInputField(e.target.value, 'email')}
          sx={{ mb: '24px' }}
        />
        <TextField
          fullWidth
          type='password'
          label='パスワード'
          value={password}
          onChange={(e) => dispatchSetInputField(e.target.value, 'password')}
          sx={{ mb: '24px' }}
        />

        {error && (
          <P v='body2' sx={{ color: theme.palette.error.main }}>
            ログインに失敗しました。もう一度お試しください
          </P>
        )}

        <Button label='ログイン' onClick={handleSubmit} sx={{ width: '100%' }} />
      </Box>
    </Box>
  );
}

export default Login;
