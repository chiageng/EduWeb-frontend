import React from "react";
import {
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Box
} from "@mui/material";
import { neural900, white } from "../../design/color";
import { fontType } from "../../design/font";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

function ProfileDisplay() {
  return (
    <Box mt={4}>
      <Card
        sx={{
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          mb: "16px",
          width: "100%",
          mt: "25px",
        }}
      >
        <CardContent sx={{ width: "100%", minHeight: "100px" }}>

          {/* Webpage display */}
          <Grid container display={{ xs: "none", md: "flex"}} justifyContent="space-evenly" mt={2}>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"
                    textAlign="center"
                  >
                    2
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"

                  >
                    Total Quiz
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
            <Grid container direction="column">
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"

                    textAlign="center"
                  >
                    200
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"

                  >
                    Total Points
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"
                    textAlign="center"
                  >
                    10
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"
                  >
                    Total Course Enrolled
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Design for phone */}
          <Grid container display={{ xs: "flex", md: "none"}} direction="column" mt={2} >
            <Grid item mr={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"
                    textAlign="center"
                  >
                    2
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"
                    textAlign="center"

                  >
                    Total Quiz
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item mr={4}>
            <Grid container direction="column">
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"

                    textAlign="center"
                  >
                    200
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"
                    textAlign="center"

                  >
                    Total Points
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item mr={4}>
              <Grid container direction="column">
                <Grid item >
                  <Typography
                    fontFamily={fontType}
                    fontWeight={800}
                    color={neural900}
                    fontSize="36px"
                    textAlign="center"
                  >
                    10
                  </Typography>
                </Grid>
                <Grid item >
                  <Typography
                    fontFamily={fontType}
                    fontWeight={400}
                    color={neural900}
                    fontSize="16px"
                    textAlign="center"
                  >
                    Total Course Enrolled
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </CardContent>
      </Card>

      <Card
        sx={{
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          mb: "16px",
          width: "100%",
          mt: "25px",
        }}
      >
        <CardContent sx={{ width: "100%", minHeight: "100px" }}>
          <Grid container display="flex">
            <Grid item>
              <AutoStoriesOutlinedIcon
                sx={{ fontSize: 18, color: neural900, fontWeight: 800 }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={800}
                color={neural900}
                fontSize="16px"
                mt={0.25}
                ml={1}
              >
                Enrolled Course
              </Typography>
            </Grid>
          </Grid>

          <Divider flexItem />

        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileDisplay;
