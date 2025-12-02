import { useEffect } from 'react';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import { routes } from '../config/routes-config';
import Dashboard from '../features/dashboard/dashboard';
import Login from '../features/login/login';

/**
 * このコンポーネントはルートを定義する
 */
export default function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const savedUser = sessionStorage.getItem('user');

  const routesConfig = [
    { ...routes.login, element: <Login /> },
    { ...routes.dashboard, element: <Dashboard /> },
    // { path: '/*', element: <NotFound /> },
  ];

  useEffect(() => {
    if (currentPath !== routes.login.path && !savedUser) {
      navigate(routes.login.path, { replace: true });
    }
  }, [currentPath, savedUser, navigate]);

  return (
    <>
      <Layout currentPath={currentPath}>{useRoutes(routesConfig)}</Layout>
    </>
  );
}
