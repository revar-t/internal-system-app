import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#191970',
      light: '#4b4bff',
      dark: '#0b0b33',
      contrastText: '#fff',
    },
    secondary: {
      main: '#197070',
      light: '#229999',
      dark: '#0b3333',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    background: {
      default: '#fff',
      paper: '#f5f5ff',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: [
      '"ヒラギノ角ゴ ProN"',
      'Hiragino Kaku Gothic ProN',
      '"メイリオ"',
      'Meiryo',
      'sans-serif',
    ].join(','),
    h1: { fontSize: '32px', fontWeight: 700 },
    h2: { fontSize: '28px', fontWeight: 700 },
    h3: { fontSize: '24px', fontWeight: 700 },
    h4: { fontSize: '20px', fontWeight: 700 },
    h5: { fontSize: '16px', fontWeight: 700 },
    h6: { fontSize: '14px', fontWeight: 500 },
    body1: { fontSize: '16px' },
    body2: { fontSize: '14px' },
    button: { fontSize: '18px', fontWeight: 500 },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;
