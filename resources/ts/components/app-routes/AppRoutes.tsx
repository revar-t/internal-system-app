import { routes } from "@/config/routes-config";
import React from "react";
import { useRoutes } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return useRoutes(routes);
};

export default AppRoutes;
