import React from "react";
import { CardActions, Grid, Button, CardContent, CardMedia, Card, Box, Typography } from "@mui/material";
import { fontType } from "../design/font";
import {
  neural300,
  neural900,
  purplishBluePale,
  purplishBlue,
  neural700,
  orangeLight,
} from "../design/color";
import BasicRating from "./BasicRating";

export default function Review() {
  const item = (
    <CardContent sx={{ py: "8px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={1} display="block" mt={1}>
          <CardMedia
            sx={{ height: 32, width: 32 }}
            image="/images/avatar.jpg"
          />
        </Grid>

        <Grid item xs={10} sm={11} display="block" mt={1}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: fontType,
              fontWeight: 600,
              color: neural900,
              pt: 0.5,
            }}
          >
            Chia Geng
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: fontType,
              fontWeight: 400,
              color: neural300,
              pt: 0.5,
            }}
          >
            2h ago
          </Typography>
          <BasicRating value={5} />
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: fontType,
              fontWeight: 400,
              color: neural900,
              pt: 0.5,
            }}
          >
            Here is a test comment
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );

  return (
    <Card
      sx={{
        display: "block",
        borderRadius: "10px",
        mb: "16px",
        width: "100%",

      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: "22px",
            fontFamily: fontType,
            fontWeight: 700,
            color: neural700,
            pt: 0.5,
            pl: 0.5,
          }}
        >
          Reviews
        </Typography>
      </CardContent>
      <Box
        sx={{
          overflowY: "scroll",
          height: "380px",
          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "&::-webkit-scrollbar": {
            display: "block",
            width: "0.512rem",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px ${purplishBluePale}`,
            webkitBoxShadow: `inset 0 0 6px ${purplishBluePale}`,
            backgroundColor: purplishBluePale,
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: purplishBlue,
            borderRadius: "8px",
          },
        }}
      >
        {/* Display all comments session */}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
      </Box>

      <CardActions>
        <Button
          sx={{
            my: "24px",
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "140%",
            borderRadius: 2,
            ml: 2,
            fontFamily: fontType,
            backgroundColor: orangeLight,
            color: neural900,
            px: 4,
            py: 1.5,
            fontWeight: 700,
            ":hover": { backgroundColor: orangeLight },
          }}
        >
          Write Review
        </Button>
      </CardActions>
    </Card>
  );
}
