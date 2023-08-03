import React from "react";
import { purplishBlueDark, purplishBluePale, white } from "../../design/color";
import { Box, Grid, Typography } from "@mui/material";

function HomeHelper2() {
  return (
    <Box
      sx={{ backgroundColor: purplishBlueDark, minHeight: "200px" }}
      mt={-9.5}
    >
      <Grid container display={{xs: "block", md: "flex"}} pt={2}>
        <Grid item md={4}>
          <Grid container direction="column" alignItems="center" pt={3}>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 32,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                10K+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                More than 10k questions bank
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container direction="column" alignItems="center" mt={3}>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 32,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                80K+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                More than 80k users
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}  pb={8}>
          <Grid container direction="column" alignItems="center" mt={3}>
            <Grid item >
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 32,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                20+
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 14,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: white,
                  mt: 1,
                }}
              >
                Expert Mentors
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeHelper2;
