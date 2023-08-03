import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { neural900, purplishBlue } from "../design/color";
import HomeHelper1 from "../components/homescreen/HomeHelper1";
import HomeHelper2 from "../components/homescreen/HomeHelper2";
import HomeHelper3 from "../components/homescreen/HomeHelper3";

function HomeScreen() {
  return (
    <>
      <Box pt={5} pb={4}>
        <HomeHelper1/>
        <HomeHelper2/>
        <HomeHelper3/>
      </Box>
    </>
  );
}

export default HomeScreen;
