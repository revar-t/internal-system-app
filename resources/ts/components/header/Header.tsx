import { AppBar, Box, Toolbar } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoWhite } from '../../config/image-config';
import { useDispatch, useSelector } from '../../hooks/custom-store';
import { callLogoutAsync } from '../../stores/login/slice';
import Button from '../button';
import P from '../p';

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
          <Box component='img' src={logoWhite.src} alt={logoWhite.alt} sx={{ height: '36px' }} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '8px',
            }}
          >
            <P>{user?.email || ''}</P>
            <Button label='ログアウト' onClick={handleSubmit} color='secondary' />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
