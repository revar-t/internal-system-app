import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../hooks/custom-store';
import { callLogoutAsync } from '../../stores/login/slice';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(callLogoutAsync());
  };
  return (
    <AppBar position='fixed' elevation={1}>
      <Toolbar>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='h6' noWrap component='div'>
            社内システム
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant='h6' noWrap component='div'>
              {user?.email || ''}
            </Typography>
            <Box component='form' onSubmit={handleSubmit} sx={{ width: 180 }}>
              <Button type='submit' variant='contained' color='primary' fullWidth>
                ログアウト
              </Button>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
