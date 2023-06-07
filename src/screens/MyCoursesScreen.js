import React from "react";
import Course from "../components/Course";
import { courses } from "../Courses";
import { Grid, Box, Typography } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function CoursesScreen() {
  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography style={{ textDecoration: 'none' }} underline="none" key="1" color={neural500}>
        My Course
      </Typography>

    </Breadcrumbs>
  );

  return (
    <Box pt={5} pb={10}>
      <Typography
        variant="h3"
        fontFamily="Poppins"
        sx={{
          fontSize: 32,
          fontWeight: 600,
          fontStyle: "normal",
          color: neural900,
          mb: "32px",
        }}
      >
        My Course
      </Typography>
      {breadcrumb}
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={3} key={course._id}>
            <Course course={course}></Course>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoursesScreen;
