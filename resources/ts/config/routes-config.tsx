import { Navigate } from 'react-router-dom';
import Login from '../features/login/Login';
// import Dashboard from "./pages/Dashboard";
// import EmployeeList from "./pages/EmployeeList";
// import EmployeeDetail from "./pages/EmployeeDetail";

export const routes = [
  { path: '/', element: <Navigate to='/login' replace /> },
  { path: '/login', element: <Login /> },
  //   { path: "/dashboard", element: <Dashboard /> },
  //   { path: "/employee", element: <EmployeeList /> },
  //   { path: "/employee/:id", element: <EmployeeDetail /> },
  { path: '*', element: <Navigate to='/dashboard' replace /> },
];
