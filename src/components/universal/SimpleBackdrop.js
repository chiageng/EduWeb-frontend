import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { fontType } from "../../design/font";
import {
  neural700,
  neural900,
  green,
  purplishBlueDark,
  purplishBlue,
  white,
  hoverBlueButton,
  activeBlueButton,
  pressedBlueButton,
} from "../../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SimpleBackdrop({ end, onClick, result, totalQuestions, buttonHandler }) {

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={end}
        onClick={onClick}
      >
        {/* Backdrop for webpage design */}
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 5, p: 3, mx: 1 }}>
          <CardContent>
            <Grid
              container
              direction="column"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontFamily: fontType,
                    fontSize: "16px",
                    color: neural900,
                    mb: 2
                  }}
                >
                  Your Score:
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justifyContent="space-around">
                  <Grid item mt={0.75}>
                    <CheckCircleIcon sx={{ color: green, fontSize: "32px" }} />
                  </Grid>
                  <Grid item >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontFamily: fontType,
                        fontSize: "32px",
                        color: neural900,
                        mb: 2
                      }}
                    >
                      {result}/{totalQuestions}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    textTransform: "capitalize",
                    px: 4,
                    py: 1.5,
                    width: "100%",
                    borderRadius: 3,
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  onClick={buttonHandler}
                >
                  Quiz Page
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
          </Grid>
        </Grid>

        {/* Backdrop for phone design */}
        {/* <Grid container display={{xs:'block', md: 'none'}}>
        <Card sx={{ borderRadius: 10, p: 3, width: '60%', mx: 'auto' }}>
          <CardContent>
            <Grid
              container
              direction="column"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontFamily: fontType,
                    fontSize: "30px",
                    color: neural900,
                    mb: 1
                  }}
                >
                  Your Score:
                </Typography>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item md={2} mt={0.5}>
                    <CheckCircleIcon sx={{ color: green }} />
                  </Grid>
                  <Grid item  md={2}>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontFamily: fontType,
                        fontSize: "20px",
                        color: neural700,
                        mb: 2
                      }}
                    >
                      {result}/{totalQuestions}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    width: "100%",
                    borderRadius: 3,
                    ":hover": { backgroundColor: purplishBlueDark },
                  }}
                  onClick={buttonHandler}
                >
                  Quiz Page
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        </Grid> */}
      </Backdrop>
    </>
  );
}
