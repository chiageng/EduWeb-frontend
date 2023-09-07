import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import {
  activeBlueButton,
  activeBorderBlueButton,
  hoverBlueButton,
  hoverBorderBlueButton,
  neural900,
  orange,
  pressedBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  purplishBlue,
  purplishBlueDark,
  purplishBlueLight,
  purplishBluePale,
  white,
} from "../design/color";
import { ThemeProvider } from "@mui/material/styles";
import { adminTheme } from "./Theme";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { fontType } from "../design/font";
import { Grid, InputAdornment, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LeftBar from "./LeftBar";

let drawerWidth = 240;
const closeDrawerWidth = 50;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 10px)`,
  },
  // width: drawerWidth,
  // [theme.breakpoints.up("sm")]: {
  //   width: drawerWidth,
  // },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop,
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(true && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AdminAppBar({ user }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(false);
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    if (open) {
      setOpen(false);
      drawerWidth = 70;
    } else {
      setOpen(true);
      drawerWidth = 240;
    }
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

  let logo = (
    <Typography
      fontFamily="Poppins"
      sx={{
        fontSize: 24,
        fontWeight: 800,
        fontStyle: "normal",
        color: purplishBlue,
        my: 3,
        ml: 4,
        fontType: fontType,
      }}
    >
      EDUACE
    </Typography>
  );

  if (open) {
    logo = (
      <Typography
        fontFamily="Poppins"
        sx={{
          fontSize: 24,
          fontWeight: 800,
          fontStyle: "normal",
          color: purplishBlue,
          my: 3,
          ml: 4,
          fontType: fontType,
        }}
      >
        EDUACE
      </Typography>
    );
  } else {
    logo = (
      <Paper width="30px" sx={{ backgroundColor: purplishBlueLight, my: 3, mx: 2, }}>
        <Typography
          fontFamily="Poppins"
          sx={{
            fontSize: 24,
            fontWeight: 800,
            fontStyle: "normal",
            color: purplishBlue,
            fontType: fontType,
            ml: 2,
            backgroundColor: purplishBlueLight,
          }}
        >
          E
        </Typography>
      </Paper>
    );
  }

  return (
    <ThemeProvider theme={adminTheme}>
      <AppBar position="sticky" open={open}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* When login, Navigation bar for webpage*/}
            {user && (
              <Grid
                container
                sx={{
                  display: {xs: "none", sm: "flex"},
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid item xs={8}>
                  <Grid container display="flex">
                    <Grid item>
                      <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Grid>
                    <Grid item mt={0.5}>
                      <TextField
                        size="small"
                        fullWidth
                        margin="none"
                        value=""
                        placeholder="Search for anything"
                        onChange={() => {}}
                        name="search"
                        id="search"
                        InputProps={{
                          style: {
                            backgroundColor: white,
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                      />{" "}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {" "}
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={user.user.image && user.user.image.Location}
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
                      <Typography
                        textAlign="center"
                        sx={{ textTransform: "capitalize" }}
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <LeftBar logo={logo} open={open} Drawer={Drawer}/>
      
    </ThemeProvider>
  );
}
export default AdminAppBar;
