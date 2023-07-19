import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  checkEnroll,
  enrollCourse,
  viewPriceCourse,
} from "../actions/courseActions";
import CourseDescription from "../components/screenHelpers/CourseDescription";
import AddToCart from "../components/screenHelpers/AddToCart";
import Review from "../components/universal/Review";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/universal/Loader";

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
      navigate(`/mycourses/${params.slug}`);
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
                key={course._title}
                  title={course.title}
                  description={course.description}
                  lessons={lessons}
                  instructor={course.instructor_name}
                />
              )}
              <Review />
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }} md={3.5}>
              {course && (
                <AddToCart
                  key={course._id}
                  price={course.price}
                  onClick={handleAddToCart}
                  enroll={enroll}
                  image={course.image.Location}
                />
              )}
            </Grid>

            {/* Display for phone */}
            <Grid item display={{ xs: "block", md: "none" }} xs={12}>
              {course && (
                <CourseDescription
                  key={course._title}
                  title={course.title}
                  description={course.description}
                  lessons={lessons}
                  instructor={course.instructor_name}
                />
              )}
              {course && (
                <AddToCart
                  key={course._id}
                  price={course.price}
                  onClick={handleAddToCart}
                  enroll={enroll}
                  image={course.image.Location}
          
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
