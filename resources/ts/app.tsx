import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import "@/bootstrap";
import { routes } from "./config/routes-config";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme-config";
import Layout from "./components/Layout";
import AppRoutes from "./components/AppRoutes";

const App = () => {
  const location = useLocation();

  // ログインページではLayoutを外す
  const isAuthPage = location.pathname === "/login";

  return isAuthPage ? <AppRoutes /> : <Layout />;
};

const rootElement = document.getElementById("app");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
