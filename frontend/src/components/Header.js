import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link,} from 'react-router-dom';

function Header() {
  // const [value, setValue] = useState("login");
 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Book
            </Typography>
            <Button
              component={Link}
                           to="/login"
              variant="contained"
              color="primary">
              Login
            </Button>
            <Button component={Link}
              to="/signup"
              variant="contained"
              color="primary">Signup</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
