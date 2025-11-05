import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "@/bootstrap";
import { routes } from "./config/routes-config";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./config/theme-config";

const AppRoutes = () => useRoutes(routes);

const rootElement = document.getElementById("app");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
}
