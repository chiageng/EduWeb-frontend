import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { neural500, neural900, purplishBlue } from "../../design/color";
import { fontType } from "../../design/font";
import { useNavigate } from "react-router-dom";

function HomeHelper1() {
  const navigate = useNavigate();

  return (
    <>
      {/* Webpage display */}
      <Grid container display={{ xs: "none", md: "flex" }}>
        <Grid item sm={1.5}></Grid>
        <Grid item sm={4} mt={5} mr={10}>
          <Box>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: neural900,
                mb: 1,
              }}
            >
              Getting
            </Typography>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: purplishBlue,
                mb: 1,
                ml: 1.5,
              }}
            >
              Best
            </Typography>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: neural900,
                mb: 1,
                ml: 1.5,
              }}
            >
              Quality
            </Typography>
            <Typography
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              Education is Now
            </Typography>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              Much
            </Typography>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 42,
                fontWeight: 900,
                fontStyle: "normal",
                color: purplishBlue,
                ml: 1.5,
              }}
            >
              Easier
            </Typography>
            <Typography
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                fontWeight: 400,
                fontStyle: "normal",
                color: neural500,
                mt: 2,
              }}
            >
              Easy access to learning with expert teachers and materials that
              have been arranged and are better than conventional systems
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                fontWeight: 600,
                borderRadius: 3,
                px: 4,
                py: 1.5,
              }}
              onClick={() => navigate(`/courses`)}
            >
              Join Course
            </Button>
          </Box>
        </Grid>
        <Grid item mt={-5} ml={2}>
          <img
            src="/images/header-pic.jpg"
            style={{
              mixBlendMode: "multiply",
              width: "500px",
              height: "600px",
            }}
          ></img>
        </Grid>
      </Grid>

      {/* Phone display */}
      <Grid
        container
        display={{ xs: "block", md: "none" }}
        alignItems="center"
        direction="column"
        sx={{ maxWidth: "400px", mx: "auto" }}
      >
        <Grid item ml={2}>
          <Typography
            display="inline"
            fontFamily="Poppins"
            sx={{
              fontSize: 36,
              fontWeight: 900,
              fontStyle: "normal",
              color: neural900,
            }}
          >
            Getting
          </Typography>
          <Typography
            display="inline"
            fontFamily="Poppins"
            sx={{
              fontSize: 36,
              fontWeight: 900,
              fontStyle: "normal",
              color: purplishBlue,
              ml: 1.5,
            }}
          >
            Best
          </Typography>
          <Typography
            display="inline"
            fontFamily="Poppins"
            sx={{
              fontSize: 36,
              fontWeight: 900,
              fontStyle: "normal",
              color: neural900,
              ml: 1.5,
            }}
          >
            Quality
          </Typography>
          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 36,
              fontWeight: 900,
              fontStyle: "normal",
              color: neural900,
              mt: -1,
            }}
          >
            Education is Now
          </Typography>
          <Box mt={-1}>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 36,
                fontWeight: 900,
                fontStyle: "normal",
                color: neural900,
                mt: -1,
              }}
            >
              Much
            </Typography>
            <Typography
              display="inline"
              fontFamily="Poppins"
              sx={{
                fontSize: 36,
                fontWeight: 900,
                fontStyle: "normal",
                color: purplishBlue,
                ml: 1.5,
                mt: -1,
              }}
            >
              Easier
            </Typography>
          </Box>
        </Grid>

        <Grid item>
          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
              mt: 1,
              px: 2,
            }}
          >
            Easy access to learning with expert teachers and materials that have
            been arranged and are better than conventional systems
          </Typography>
        </Grid>

        <Grid item mt={-5} mb={2.8}>
          <img
            src="/images/header-pic.jpg"
            style={{
              mixBlendMode: "multiply",
              width: "350px",
              height: "400px",
            }}
          ></img>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeHelper1;
