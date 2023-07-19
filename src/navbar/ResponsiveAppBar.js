import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { neural900, orange, purplishBlue } from "../design/color";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./Theme";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";

function ResponsiveAppBar({ user }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    handleCloseNavMenu();
    dispatch(logout());
    navigate("./login");
  };

  const handleLogin = () => {
    handleCloseNavMenu();
    handleCloseUserMenu();
    setLogin(true);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Nav Logo for webpage */}
            <Typography
              variant="h1"
              noWrap
              component="a"
              onClick={() => {
                navigate(`/`);
              }}
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "Poppins",
                fontWeight: 900,
                fontSize: 20,
                fontStyle: "normal",
                lineHeight: "125%",
                color: purplishBlue,
                textDecoration: "none",
                ":hover": { cursor: "pointer" },
              }}
            >
              EDUWEB
            </Typography>

            {/* Nav Logo for Phone */}
            <Typography
              variant="h1"
              noWrap
              component="a"
              onClick={() => {
                navigate(`/`);
              }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Poppins",
                fontWeight: 900,
                fontSize: 20,
                fontStyle: "normal",
                lineHeight: "125%",
                color: purplishBlue,
                textDecoration: "none",
              }}
            >
              EDUWEB
            </Typography>

            {/* When not login Navigation bar for phone */}
            {!user && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "right",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    key="/courses"
                    sx={{
                      textDecoration: "none",
                      ":visited": {
                        color: "black",
                      },
                    }}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`/courses`);
                    }}
                  >
                    <Typography textAlign="center">Courses</Typography>
                  </MenuItem>
                  <MenuItem
                    key="/login"
                    onClick={() => {
                      handleLogin();
                      navigate(`/login`);
                    }}
                    href={`/login`}
                  >
                    <Typography textAlign="center">Log in / Sign up</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {/* When login Navigation bar for phone */}
            {user && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "right",
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    key="/dashboard"
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(`/`);
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{
                        textDecoration: "none",
                        ":visited": {
                          color: "black",
                        },
                      }}
                    >
                      Dashboard
                    </Typography>
                  </MenuItem>
                  <MenuItem key="/course" onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/courses`);
                  }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        textDecoration: "none",
                        ":visited": {
                          color: "black",
                        },
                      }}
                    >
                      Course
                    </Typography>
                  </MenuItem>
                  <MenuItem key="/mycourse" onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/mycourses`);
                  }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        textDecoration: "none",
                        ":visited": {
                          color: "black",
                        },
                      }}
                    >
                      My Course
                    </Typography>
                  </MenuItem>
                  <MenuItem key="/profile" onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/myprofile`);
                  }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        textDecoration: "none",
                        ":visited": {
                          color: "black",
                        },
                      }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem key="/login" onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}

            {/* When not login Navigation Bar Webpage */}
            {!user && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "right",
                }}
              >
                <Button
                  key="/courses"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/courses`);
                  }}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  Courses
                </Button>
                <Button
                  key="/aboutus"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  About Us
                </Button>
                <Button
                  key="/android"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                    backgroundColor: orange,
                    ":hover": {
                      bgcolor: orange,
                    },
                  }}
                >
                  Available for IOS & Android
                </Button>
                <Button
                  key="/login"
                  onClick={() => {
                    handleLogin();
                    navigate(`/login`);
                  }}
                  sx={{
                    ml: 2,
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                    backgroundColor: purplishBlue,
                    ":hover": {
                      bgcolor: purplishBlue,
                    },
                  }}
                >
                  Log in / Sign up
                </Button>
              </Box>
            )}

            {/* When login, Navigation bar for webpage*/}
            {user && (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "right",
                }}
              >
                <Button
                  key="/dashboard"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/`);
                  }}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  key="/courses"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/courses`);
                  }}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  Courses
                </Button>
                <Button
                  key="/mycourse"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/mycourses`);
                  }}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                    textDecoration: "none",
                  }}
                >
                  My Course
                </Button>

                <Button
                  key="/profile"
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`/myprofile`);
                  }}
                  sx={{
                    my: "24px",
                    mr: 2,
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                >
                  Profile
                </Button>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key="/logout" onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
