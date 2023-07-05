import React from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { neural300, neural500, neural700, neural900, white } from "../../design/color";
import { fontType } from "../../design/font";
import BasicRating from "../universal/BasicRating";

function CourseDescription({title, descriptions, lessons, instructor}) {
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: "5px",
        mb: "16px",
        width: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <CardContent sx={{width: "100%"}}>
          <Typography
            variant="h5"
            fontFamily={fontType}
            fontWeight={900}
            color={neural900}
            fontSize="40px"
            mb={1.5}
          >
            {title}
          </Typography>

          <BasicRating value={5} />

          <Grid container spacing={1}>
            <Grid item  display="block" mt={1}>
              <CardMedia
                sx={{ height: 32, width: 32, float: "left" }}
                image="/images/avatar.jpg"
              />
            </Grid>
            <Grid
              item
  
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
                {instructor}
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
          </Grid>

          <Typography
            variant="subtitle1"
            color={neural700}
            fontSize="18px"
            fontFamily={fontType}
            component="div"
            my={1}
          >
            {descriptions}
          </Typography>

          <Divider flexItem  />

          <Typography
            variant="subtitle1"
            color={neural700}
            fontSize="22px"
            fontWeight={700}
            fontFamily={fontType}
            component="div"
            mt={2}
          >
            What you will learn
          </Typography>

          <Typography
            variant="subtitle1"
            color={neural500}
            fontSize="16px"
            fontFamily={fontType}
            component="div"
            mt={1}
          >
            <ul>
              {lessons.map(lesson => (
                <li>{lesson.title}</li>
              )).slice(0, 6)}
            </ul>
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
        ></Box>
      </Box>
    </Card>
  );
}

export default CourseDescription;
