import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  white,
} from "../design/color";
import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function AdminHelper({ AppBar, open, toggleDrawer, user, anchorElUser, handleCloseUserMenu, handleLogout, handleOpenUserMenu, searchBar}) {
  return (
    <AppBar position="sticky" open={open}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* When login, Navigation bar for webpage*/}
          {user && (
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Grid container display={{ xs: "none", sm: "flex" }}>
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
                    {searchBar && <TextField
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
                    />}
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
  );
}

export default AdminHelper;
