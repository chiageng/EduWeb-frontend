import React, { useEffect } from "react";
import Course from "../components/Course";
// import { courses } from "../Courses";
import { Grid, Box, Typography, Container } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { viewCourses } from "../actions/courseActions";

function MyCoursesScreen() {
  const dispatch = useDispatch();
  const coursesView = useSelector(state => state.coursesView);

  const { loading, courses, error } = coursesView;


  useEffect(() => {
    if (!courses) {
      dispatch(viewCourses());
    }
  }, coursesView)

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
    <Container>
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
      {courses && <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={3} key={course._id}>
            <Course course={course}></Course>
          </Grid>
        ))}
      </Grid>
}    </Box>
    </Container>
  );
}

export default MyCoursesScreen;
