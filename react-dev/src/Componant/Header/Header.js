import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.01 }}>
            Dynamic Form
          </Typography>
          <Button variant="contained" type="submit" sx={{ flexGrow: 0.01 }}>
            Preview Form
          </Button>
          <Button variant="contained" type="submit">
            Save Form
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
