import React from "react";
import Rating from "./BasicRating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import {
  neural900,
  purplishBlue,
  hotPink,
  skyBlue,
  neural700,
  orangeLight,
  neural500,
} from "../design/color";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { fontType } from "../design/font";

function CoursePrice({ course }) {
  const colors = [purplishBlue, hotPink, skyBlue];
  const useColor = colors[course._id % 3];


  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={course.image}
        title={course.title}
      />
      <CardContent>
      <Box sx={{ display: "flex" }}>
      <Grid container alignItems="center">
        <Grid item xs={1} sm={1} pt={0.4}>
          <PlayCircleFilledWhiteIcon
            fontSize="small"
            sx={{ color: useColor }}
          />
        </Grid>
        <Grid item xs={7} sm={5}>
          <Typography
            pl={1}
            size="small"
            style={{
              textDecoration: "none",
              fontFamily: fontType,
              color: neural900,
              fontSize: "14px",
              float: "left",
            }}
          >
            13 lessons
          </Typography>
        </Grid>
        <Grid item xs={1} sm={3}>
          <Rating value={+course.rating} sx={{}} />
        </Grid>
      </Grid>
    </Box>
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily={fontType}
              sx={{
                fontSize: 18,
                fontWeight: 700,
                fontStyle: "normal",
                color: neural900,
              }}
              variant="h5"
              component="div"
            >
              {course.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary" mt={1}>
              {course.category}
            </Typography>
          </Grid>
        </Grid>

        <Divider />
        <Grid container spacing={1}>
          <Grid item xs={2} sm={2} display="block" mt={1}>
            <CardMedia
              sx={{ height: 32, width: 32, float: "left" }}
              image="/images/avatar.jpg"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            alignItems="left
          "
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
                pt: 1,
              }}
            >
              {course.instructor}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural500,
              }}
            >
              Science Tutor
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sm={4}
            display="block"
            mt={3}
            sx={{ fontSize: "12px", fontFamily: fontType, color: neural500 }}
          >
            RM{course.price}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: orangeLight,
            borderRadius: "8px",
          }}
        >
          <Button
            size="small"
            sx={{
              color: neural900,
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
          >
            View Course
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default CoursePrice;
