import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Box, Typography } from "@mui/material";
import {
  neural500,
  neural700,
  neural900,
  purplishBlue,
  purplishBluePale,
} from "../design/color";
import { fontType } from "../design/font";

function PlayList() {
  const item = (
    <CardContent sx={{ py: "8px" }}>
      <Button
        onClick={() => (window.location.href = `./mycourses`)}
        style={{ textAlign: "left" }}
        sx={{
          p: 0,
          width: "95%",
          height: "80px",
          ":hover": { backgroundColor: purplishBluePale },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={2}>
            <CardMedia
              sx={{ height: 36, width: 36 }}
              image="/images/chem-logo.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
              }}
            >
              Topic 1 State of matter
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: fontType,
                fontWeight: 400,
                color: neural500,
              }}
            >
              CS Wong
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </CardContent>
  );

  return (
    <Card
      sx={{
        display: { xs: "none", md: "block" },
        borderRadius: "10px",
        mb: "16px",
        width: "430px",
        height: "430px",
      }}
    >
      <CardContent sx={{ pb: "8px" }}>
        <Typography
          component="div"
          variant="h5"
          fontFamily={fontType}
          fontWeight={700}
          color={neural900}
          fontSize="18px"
        >
          Primary Science Course Chapter 1 to 15
        </Typography>
      </CardContent>
      <Box
        sx={{
          overflowY: "scroll",
          height: "350px",
          '&:hover::-webkit-scrollbar': {
            display: 'block',
            },
            '&::-webkit-scrollbar': {
            display: 'block',
            width: '0.512rem',
            },
            '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px ${purplishBluePale}`,
            webkitBoxShadow: `inset 0 0 6px ${purplishBluePale}`,
            backgroundColor: purplishBluePale,
            borderRadius: "8px",
            },
            '&::-webkit-scrollbar-thumb': {
            backgroundColor:  purplishBlue,
            borderRadius: '8px',
            },
        }}
        
      >
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
      </Box>
    </Card>
  );
}

export default PlayList;
