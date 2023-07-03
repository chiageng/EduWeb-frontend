import React, { useEffect } from "react";
// import { courses } from "../Courses";
import { Grid, Box, Typography, Container } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CoursePrice from "../components/CoursePrice";
import { useDispatch, useSelector } from "react-redux";
import { viewPriceCourses } from "../actions/courseActions";

function CoursesScreen() {
  const dispatch = useDispatch()

  const coursesPriceView = useSelector(state => state.coursesPriceView);

  const { courses, loading, error } = coursesPriceView;

  useEffect(() => {
    if (!courses) {
      dispatch(viewPriceCourses());
    } else {
    }
  }, [courses])


  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        My Course
      </Typography>
    </Breadcrumbs>
  );

  return (
    <Container>
    <Box pt={5} pb={10}>
      <Grid container spacing={3}>
        <Grid item display={{ xs: "none", md: "block" }} md={3}>
          Testing category
        </Grid>
        <Grid item xs={12} md={9}>
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
            All Courses
          </Typography>
          <Grid container spacing={3}>
            {courses && courses.map((course) => (
              <Grid item xs={12} md={4} key={course._id}>
                <CoursePrice course={course}></CoursePrice>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}

export default CoursesScreen;
