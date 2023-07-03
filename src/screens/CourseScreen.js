import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CoursePrice from "../components/CoursePrice";
import { useDispatch, useSelector } from "react-redux";
import {
  checkEnroll,
  enrollCourse,
  viewCourse,
  viewPriceCourse,
  viewPriceCourses,
} from "../actions/courseActions";
import CourseDescription from "../components/CourseDescription";
import AddToCart from "../components/AddToCart";
import Review from "../components/Review";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

function CourseScreen() {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseView = useSelector((state) => state.courseView);
  const { loading, course, lessons, error } = courseView;

  const enrollCheck = useSelector((state) => state.enrollCheck);
  const { loading: enrollLoading, enroll } = enrollCheck;

  useEffect(() => {
    if (!course || course.slug != params.slug) {
      dispatch(viewPriceCourse(params.slug));
      dispatch(checkEnroll(params.slug));
    }
  }, [params, course]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!enroll) {
      dispatch(enrollCourse(params.slug));
    } else {
      navigate(`/user/mycourse/${params.slug}`);
    }
  };

  return (
    <Container>
      {(loading || enrollLoading) && <Loader />}
      {(!loading && !enrollLoading) && (
        <Box pt={5} pb={10}>
          <Grid container spacing={3}>
            {/* Display for pc */}
            <Grid item display={{ xs: "none", md: "block" }} md={8.5}>
              {course && (
                <CourseDescription
                  title={course.title}
                  description={course.description}
                  lessons={lessons}
                />
              )}
              <Review />
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }} md={3.5}>
              {course && (
                <AddToCart
                  price={course.price}
                  onClick={handleAddToCart}
                  enroll={enroll}
                />
              )}
            </Grid>

            {/* Display for phone */}
            <Grid item display={{ xs: "block", md: "none" }} xs={12}>
              {course && (
                <CourseDescription
                  title={course.title}
                  description={course.description}
                  lessons={lessons}
                />
              )}
              {course && (
                <AddToCart
                  price={course.price}
                  onClick={handleAddToCart}
                  enroll={enroll}
                />
              )}
              <Review />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default CourseScreen;
