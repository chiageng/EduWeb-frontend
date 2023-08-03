import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { neural500, neural900, white } from "../../design/color";

function HomeHelper3() {
  return (
    <Box sx={{ backgroundColor: white, minHeight: "200px" }}>
      {/* Webpage design */}
      <Grid
        container
        display={{ xs: "none", md: "flex" }}
        sx={{ pb: 6, pt: 10 }}
      >
        <Grid item md={1}></Grid>
        <Grid item md={4.5} pr={8}>
          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 42,
              fontWeight: 900,
              fontStyle: "normal",
              color: neural900,
              mb: 1,
              mt: 6,
            }}
          >
            Why are we different from others?
          </Typography>

          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
              mb: 1,
            }}
          >
            We helped more than 100k Malaysian students practice and score more
            than 100k A's in SPM since Aug 2023
          </Typography>
        </Grid>
        <Grid item md={6} pr={4}>
          <Grid container display="flex">
            <Grid item md={6} mb={4}>
              <img src="/images/Frame97.jpg" alt="qualityContent" />
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                }}
              >
                Quality Content
              </Typography>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  pr: 4,
                }}
              >
                Aligned To Malaysian National Curriculum from MOE
              </Typography>
            </Grid>
            <Grid item md={6} mb={4}>
              <img src="/images/Frame98.jpg" alt="personalizedLearning" />
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                }}
              >
                Personalized Learning
              </Typography>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  pr: 4,
                }}
              >
                Based on individual Capabilities and Progress
              </Typography>
            </Grid>
            <Grid item md={6} mb={4}>
              <img src="/images/Frame99.jpg" alt="topical" />
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                }}
              >
                Topical Test & Exam
              </Typography>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  pr: 4,
                }}
              >
                With Detailed Explantion and Step-by-Step Solution
              </Typography>
            </Grid>
            <Grid item md={6}>
              <img src="/images/Frame100.jpg" alt="quiz" />
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                }}
              >
                Gamified Quiz
              </Typography>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  pr: 4,
                }}
              >
                Motivate Students to Achieve Their Learning Goals
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Phone Design */}
      <Grid container display={{ xs:"block", md: "none"}} direction="column" alignItems="center" pt={4} pb={5} px={1.5}>
        <Grid item>
          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 32,
              fontWeight: 900,
              fontStyle: "normal",
              color: neural900,
              mb: 1,
              textAlign: "center",
            }}
          >
            Why are we different from others?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontFamily="Poppins"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
              mb: 1,
              textAlign: "center",
            }}
          >
            We helped more than 100k Malaysian students practice and score more
            than 100k A's in SPM since Aug 2023
          </Typography>
        </Grid>
        <Grid item mt={2}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <img
                src="/images/Frame97.jpg"
                alt="qualityContent"
                style={{ textAlign: "center" }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Quality Content
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Aligned To Malaysian National Curriculum from MOE
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item mt={2}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <img
                src="/images/Frame98.jpg"
                alt="qualityContent"
                style={{ textAlign: "center" }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Personalized Learning
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Based on individual Capabilities and Progress
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item mt={2}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <img
                src="/images/Frame99.jpg"
                alt="qualityContent"
                style={{ textAlign: "center" }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Topical Test & Exam
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                With Detailed Explanation and Step-by-Step Solution
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item mt={2}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <img
                src="/images/Frame100.jpg"
                alt="qualityContent"
                style={{ textAlign: "center" }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Gamiefied Quiz
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Poppins"
                sx={{
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Motivate Students to Achieve Their Learning Goals
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeHelper3;
