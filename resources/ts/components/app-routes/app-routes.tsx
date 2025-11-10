import { routes } from "@/config/routes-config";
import React from "react";
import { useRoutes } from "react-router-dom";

export default function AppRoutes() {
  return useRoutes(routes);
};
