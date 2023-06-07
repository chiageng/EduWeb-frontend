import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { fontType } from "../design/font";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  neural300,
  neural900,
  purplishBluePale,
  purplishBlue,
  neural700,
  purplishBlueDark,
} from "../design/color";

export default function Forum() {
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
          <Typography mt={1}>
            <ThumbUpOffAltIcon
              onClick={() => console.log("Like")}
              sx={{
                ":hover": { cursor: "pointer" },
              }}
            />
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
        height: "430px",
      }}
    >
      {/* Comment session */}
      <CardContent sx={{ py: "8px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={1.8} display="block" mt={1}>
            <CardMedia
              sx={{ height: 32, width: 32, float: "left" }}
              image="/images/avatar.jpg"
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
                float: "right",
                pt: 0.5,
              }}
            >
              Jo Jo
            </Typography>
          </Grid>

          <Grid item xs={8} sm={10} display="block" mt={1}>
            <TextField
              inputProps={{
                style: {
                  fontSize: 14,
                  backgroundColor: purplishBluePale,
                  color: purplishBlueDark
                },
              }}
              size="small"
              fullWidth
              label="Write a comment"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Box
        sx={{
          overflowY: "scroll",
          height: "350px",
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
    </Card>
  );
}
