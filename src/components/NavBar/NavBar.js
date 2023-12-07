import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
  Typography,
  Button,
  Box,
} from '@mui/material';
import NoCrashIcon from '@mui/icons-material/NoCrash';
import { Link } from 'react-router-dom';

const violetBase = '#520396';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.8),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

const NavBar = () => {
  const token = sessionStorage.getItem('token');
  const isLoggedIn = !!token; // Check if token exists

  const handleLogout = () => {
    // Clear token from sessionStorage
    sessionStorage.removeItem('token');
    // Force a page refresh to reflect the changes
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="violet">
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <NoCrashIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Typography component={Link} to="/" variant="h6" style={{ textDecoration: 'none', color: 'white' }}>
              WOW CAR RENTAL
            </Typography>
          </Box><Button color="inherit" component={Link} to="/set-order">
            SETORDER
          </Button>

          <Button color="inherit" component={Link} to="/register">
            Register
          </Button>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
