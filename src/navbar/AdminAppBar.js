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
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
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
import { useDispatch, useSelector } from "react-redux";
import { fontType } from "../design/font";
import { Box, Grid, InputAdornment, Paper, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LeftBar from "./LeftBar";
import AdminHelper from "./AdminHelper";
import { toggleLeftBar } from "../actions/universalAction";

let drawerWidth = 240;

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
    marginLeft: drawerWidth -3 ,
    width: `calc(100% - ${drawerWidth - 4}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const PhoneBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop,
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(true && {
    marginLeft: "60px",
    width: `calc(100% - ${60}px)`,
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

export const Div = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: purplishBluePale,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("xs")] : {marginLeft: "55px"},
    [theme.breakpoints.up("sm")] : {marginLeft: `${drawerWidth - 8}px`},
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.up("xs")] : {marginLeft: "55px"},
      [theme.breakpoints.up("sm")] : {marginLeft: "0px"},
    }),
  }),
);

function AdminAppBar({ user }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [login, setLogin] = useState(false);
  // const [open, setOpen] = useState(true);

  const leftBar = useSelector(state => state.leftBar);
  const { open } = leftBar

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = () => {
    if (open) {
      // setOpen(false);
      dispatch(toggleLeftBar(false));
      drawerWidth = 70;
    } else {
      // setOpen(true);
      dispatch(toggleLeftBar(true));
      drawerWidth = 240;
    }
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
    navigate("./login");
  };

  const handleLogin = () => {
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

  let smallLogo = (
    <Paper
      width="30px"
      sx={{ backgroundColor: purplishBlueLight, my: 3, mx: 2 }}
    >
      <Typography
        fontFamily="Poppins"
        sx={{
          fontSize: 24,
          fontWeight: 800,
          fontStyle: "normal",
          color: purplishBlue,
          fontType: fontType,
          ml: 1.5,
          backgroundColor: purplishBlueLight,
        }}
      >
        E
      </Typography>
    </Paper>
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
      <Paper
        width="30px"
        sx={{ backgroundColor: purplishBlueLight, my: 3, mx: 2 }}
      >
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
      {/* Top bar for webpage */}
      <Box display={{ xs: "none", sm: "flex" }}>
        <AdminHelper
          open={open}
          anchorElUser={anchorElUser}
          AppBar={AppBar}
          handleOpenUserMenu={handleOpenUserMenu}
          handleCloseUserMenu={handleCloseUserMenu}
          user={user}
          toggleDrawer={toggleDrawer}
          searchBar={true}
        />
      </Box>

      {/* Top bar for phone */}
      <Box display={{ xs: "flex", sm: "none" }}>
        <AdminHelper
          open={open}
          anchorElUser={anchorElUser}
          AppBar={PhoneBar}
          handleOpenUserMenu={handleOpenUserMenu}
          handleCloseUserMenu={handleCloseUserMenu}
          user={user}
          toggleDrawer={toggleDrawer}
          searchBar={false}
        />
      </Box>

      {/* Left Bar for webpage */}
      <Box display={{ xs: "none", sm: "flex" }}>
        <LeftBar logo={logo} open={open} Drawer={Drawer} />
      </Box>

      {/* Left Bar for phone */}
      <Box display={{ xs: "flex", sm: "none" }}>
        <LeftBar logo={smallLogo} open={false} Drawer={Drawer} />
      </Box>

    </ThemeProvider>
  );
}
export default AdminAppBar;
