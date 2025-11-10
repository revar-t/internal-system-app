import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, useLocation } from 'react-router-dom';
import AppRoutes from './components/app-routes/app-routes';
import Layout from './components/layout/layout';
import theme from './config/theme-config';
import { store } from './store/store';

const App = () => {
  const location = useLocation();

  // ログインページではLayoutを外す
  const isAuthPage = location.pathname === '/login';

  return isAuthPage ? <AppRoutes /> : <Layout />;
};

const rootElement = document.getElementById('app');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  );
}
