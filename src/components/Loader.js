import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function Loader() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="500px"
    >
      <Grid item xs={3}>
        <CircularProgress/>
      </Grid>
    </Grid>
  );
}
