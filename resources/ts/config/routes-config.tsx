import Example from "@/components/Example";
import { Navigate } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import EmployeeList from "./pages/EmployeeList";
// import EmployeeDetail from "./pages/EmployeeDetail";

export const routes = [
  { path: "/", element: <Navigate to="/login" replace /> },
  { path: "/login", element: <Example /> },
  //   { path: "/dashboard", element: <Dashboard /> },
  //   { path: "/employee", element: <EmployeeList /> },
  //   { path: "/employee/:id", element: <EmployeeDetail /> },
  { path: "*", element: <Navigate to="/dashboard" replace /> },
];
