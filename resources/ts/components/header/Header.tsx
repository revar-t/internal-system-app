import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position='fixed' elevation={1}>
      <Toolbar>
        <Typography variant='h6' noWrap component='div'>
          社内システム
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
