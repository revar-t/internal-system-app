import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from '../header/header';
import AppRoutes from '../app-routes/app-routes';
import Sidebar from '../sidebar/sidebar';

const drawerWidth = 240;
export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 🔹 ヘッダー（AppBar） */}
      <Header />

      {/* 🔹 メインコンテンツエリア */}
      <Box sx={{ display: 'flex', flexGrow: 1, minHeight: 0 }}>
        {/* 🔹 サイドバー */}
        <Sidebar drawerWidth={drawerWidth} />

        {/* 🔹 メインエリア */}
        <Box
          component='main'
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#fafafa',
            overflowY: 'auto',
          }}
        >
          {/* ヘッダー分の余白 */}
          <Toolbar />
          <AppRoutes />
        </Box>
      </Box>
    </Box>
  );
}
