import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  drawerWidth: number;
}

const Sidebar: React.FC<SidebarProps> = ({ drawerWidth }) => {
  const location = useLocation();

  const menuItems = [
    { text: "ダッシュボード", path: "/dashboard" },
    { text: "従業員一覧", path: "/employee" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          top: 64, // AppBar（Toolbar）の高さ
          height: "calc(100% - 64px)",
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.path} component={Link} to={item.path} selected={location.pathname === item.path}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
