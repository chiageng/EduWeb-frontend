import * as React from "react";
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
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";

function ResponsiveAppBar({user}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  

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
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
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

            {/* Nav Logo for Phone */}
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
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
                    as={Link}
                    to="/mycourses"
                    sx={{
                      textDecoration: "none",
                      ":visited": {
                        color: "black",
                      },
                    }}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Courses</Typography>
                  </MenuItem>
                  <MenuItem key="/blog" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Blog</Typography>
                  </MenuItem>
                  <MenuItem key="/pricing" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Pricing</Typography>
                  </MenuItem>
                  <MenuItem key="/aboutus" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">About Us</Typography>
                  </MenuItem>
                  <MenuItem key="/login" onClick={handleLogin} href={`/login`}>
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
                  <MenuItem key="/dashboard" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem key="/course" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Course</Typography>
                  </MenuItem>
                  <MenuItem key="/mycourse" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      as={Link}
                      to="/mycourses"
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
                  <MenuItem key="/pricing" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Quiz</Typography>
                  </MenuItem>
                  <MenuItem key="/aboutus" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Achievements</Typography>
                  </MenuItem>
                  <MenuItem key="/cart" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">My Cart</Typography>
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
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: "24px",
                    color: neural900,
                    display: "block",
                    fontSize: 12,
                    fontWeight: 600,
                    lineHeight: "140%",
                  }}
                  href='/courses'
                >
                  Courses
                </Button>
                <Button
                  key="/blog"
                  href="/mycourses"
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
                  My Courses
                </Button>
                <Button
                  key="/shoppingcart"
                  href="/shoppingcart"
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
                  shopping cart
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
                  onClick={handleLogin}
                  href={`/login`}
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
                  Dashboard
                </Button>
                <Button
                  key="/courses"
                  onClick={handleCloseNavMenu}
                  href="/courses"
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
                  // onClick={handleCloseNavMenu}
                  // as={Link}
                  // to="/mycourses"
                  href="/mycourses"
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
                  key="/quiz"
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
                  Quiz
                </Button>
                <Button
                  key="/achievements"
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
                  Achievements
                </Button>

                <Button
                  key="/cart"
                  onClick={handleCloseNavMenu}
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
                  My Cart
                </Button>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src=""
                    />
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
