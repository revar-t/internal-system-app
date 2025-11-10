import { useRoutes } from 'react-router-dom';
import { routes } from '../../config/routes-config';

export default function AppRoutes() {
  return useRoutes(routes);
}
