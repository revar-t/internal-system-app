import { useLocation, useRoutes } from 'react-router-dom';
import Layout from '../components/layout/layout';
import { routes } from '../config/routes-config';
import Login from '../features/login/login';

/**
 * このコンポーネントはルートを定義する
 */
export default function AppRoutes() {
  const location = useLocation();
  const currentPath = location.pathname;

  const routesConfig = [
    { ...routes.login, element: <Login /> },
    // { path: '/*', element: <NotFound /> },
  ];

  return (
    <>
      <Layout currentPath={currentPath}>{useRoutes(routesConfig)}</Layout>
    </>
  );
}
