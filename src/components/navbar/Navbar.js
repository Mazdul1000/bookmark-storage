import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box as List,
  Button as ListItem,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky" sx={{ zIndex: "1150" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookmarks
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <PermIdentityIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
};

export default Navbar;