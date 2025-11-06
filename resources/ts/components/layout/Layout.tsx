import React from "react";
import { Box, Toolbar } from "@mui/material";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import AppRoutes from "../app-routes/AppRoutes";

const drawerWidth = 240;

const Layout: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* 🔹 ヘッダー（AppBar） */}
      <Header />

      {/* 🔹 メインコンテンツエリア */}
      <Box sx={{ display: "flex", flexGrow: 1, minHeight: 0 }}>
        {/* 🔹 サイドバー */}
        <Sidebar drawerWidth={drawerWidth} />

        {/* 🔹 メインエリア */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: "#fafafa",
            overflowY: "auto",
          }}
        >
          {/* ヘッダー分の余白 */}
          <Toolbar />
          <AppRoutes />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
