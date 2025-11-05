import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          社内システム
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
