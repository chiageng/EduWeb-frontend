import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { fontType } from "../design/font";
import { neural500, neural900, orangeLight } from "../design/color";

export default function Topic({ topic }) {
  const currentUrl = window.location.href;

  return (
    <>
      {/* Topic card for Webpage */}
      <Card
        sx={{ display: { xs: "none", md: "flex" }, mx: 5, borderRadius: "10px", mb: "16px" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 64, mx: 2, height: 64, mt: 2 }}
          image="/images/chem-logo.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={700}
              color={neural900}
              fontSize="18px"
            >
              {topic.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color={neural500}
              fontSize="18px"
              fontFamily={fontType}
              component="div"
            >
              {topic.description}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
              pl: 1,
              pb: 1,
            }}
          >
            <Button
              key="/courses"
              href={`${currentUrl}/videos`}
              sx={{
                my: "24px",
                display: "block",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 10,
                mr: 3,
                fontFamily: fontType,
                backgroundColor: orangeLight,
                color: neural900,
                fontWeight: 600,
                ":hover": { backgroundColor: orangeLight },
              }}
            >
              <Grid container>
                <Grid item mt={0.5} px={2}>
                  Watch Videos
                </Grid>
                <Grid item pr={2}>
                  <PlayArrowOutlinedIcon />
                </Grid>
              </Grid>
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Topic Card for phone  */}
      <Card sx={{ display: { xs: "flex", md: "none" }, borderRadius: 3, mb: "16px" }}>
        <CardMedia
          component="img"
          sx={{ width: 40, mx: 1, height: 40, mt: 2 }}
          image="/images/chem-logo.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontSize={14}
              fontFamily={fontType}
              fontWeight={700}
              color={neural900}
            >
              Topic title
            </Typography>
            <Typography
              variant="subtitle1"
              color={neural500}
              fontSize="14px"
              fontFamily={fontType}
              component="div"
            >
              Topic description
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            <Button
              key="/courses"
              sx={{
                my: 2,
                display: "block",
                fontSize: 5,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 5,
                mr: 2,
                width: 36,
                height: 36,
                backgroundColor: orangeLight,
                color: neural900,
                ":hover": { backgroundColor: orangeLight },
              }}
            >
              <PlayArrowOutlinedIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}
