import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation, useRoutes } from 'react-router-dom';
import '@/bootstrap';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './config/theme-config';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRoutes from './components/app-routes/app-routes';
import Layout from './components/layout/layout';

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
