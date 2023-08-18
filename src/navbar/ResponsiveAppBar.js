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
import { activeBlueButton, activeBorderBlueButton, hoverBlueButton, hoverBorderBlueButton, neural900, orange, pressedBlueButton, pressedBorderBackgroundBlueButton, pressedBorderBlueButton, purplishBlue, purplishBlueDark, white } from "../design/color";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./Theme";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { fontType } from "../design/font";

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
                fontFamily: fontType,
                fontWeight: 900,
                fontSize: 20,
                fontStyle: "normal",
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
                fontFamily: fontType,
                fontWeight: 900,
                fontSize: 20,
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
                    <Typography textAlign="center" sx={{ textTransform: "capitalize"}} >Courses</Typography>
                  </MenuItem>
                  <MenuItem
                    key="/login"
                    onClick={() => {
                      handleLogin();
                      navigate(`/login`);
                    }}
                  >
                    <Typography textAlign="center" sx={{ textTransform: "capitalize"}}>Log in / Sign up</Typography>
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
                        textTransform: "capitalize",
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
                        textTransform: "capitalize",
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
                        textTransform: "capitalize",
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
                        textTransform: "capitalize",
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
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: "capitalize",
                  }}
                >
                  Courses
                </Button>
                <Button
                  key="/aboutus"
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: "capitalize",
                  }}
                >
                  About Us
                </Button>
                <Button
                  key="/android"
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  sx={{
                    ml: 1.5,
                    color: purplishBlueDark,
                    px: 4, 
                    py: 1,
                    borderRadius: 2,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                    borderColor: activeBorderBlueButton,
                    ":hover": {
                      borderColor: hoverBorderBlueButton,
                    }, 
                    ":focus": {
                      bgcolor: pressedBorderBackgroundBlueButton,
                      borderColor: pressedBorderBlueButton,
                    },
                    textTransform: "capitalize",
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
                    color: white,
                    px: 4, 
                    py: 1,
                    borderRadius: 2,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    backgroundColor: activeBlueButton,
                    ":hover": {
                      bgcolor: hoverBlueButton,
                    },
                    ":focus": {
                      backgroundColor: pressedBlueButton,
                    },
                    textTransform: "capitalize",
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
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: "capitalize",
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
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: "capitalize",
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
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: "140%",
                    textDecoration: "none",
                    textTransform: "capitalize",
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
                    mr: 2,
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    lineHeight: "140%",
                    fontWeight: 400,
                    textTransform: "capitalize",
                  }}
                >
                  Profile
                </Button>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.user.image && user.user.image.Location} />
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
                    <Typography textAlign="center" sx={{ textTransform: "capitalize", }}>Logout</Typography>
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
