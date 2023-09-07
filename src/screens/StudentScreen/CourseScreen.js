import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import {
  checkEnroll,
  createReview,
  enrollCourse,
  viewPriceCourse,
  viewReviews,
} from "../../actions/courseActions";
import CourseDescription from "../../components/screenHelpers/CourseDescription";
import AddToCart from "../../components/screenHelpers/AddToCart";
import Review from "../../components/universal/Review";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/universal/Loader";

function CourseScreen() {
  const [open, setOpen] = useState(false);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseView = useSelector((state) => state.courseView);
  const { loading, course, lessons, error } = courseView;

  const enrollCheck = useSelector((state) => state.enrollCheck);
  const { loading: enrollLoading, enrollment } = enrollCheck;

  const courseEnroll = useSelector((state) => state.courseEnroll);
  const { success } = courseEnroll;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const reviewCreate = useSelector((state) => state.reviewCreate);
  const { success: reviewSuccess } = reviewCreate;

  const reviewsView = useSelector((state) => state.reviewsView);
  const { loading: reviewLoading, reviews } = reviewsView;

  useEffect(() => {
    if (!course || course.slug != params.slug) {
      dispatch(viewPriceCourse(params.slug));
      // dispatch(checkEnroll(params.slug));
      dispatch(viewReviews(params.slug));
    }
  }, [params, course]);

  useEffect(() => {
    dispatch(checkEnroll(params.slug));

    if (reviewSuccess) {
      dispatch(viewReviews(params.slug));
    }
  }, [success, reviewSuccess]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!enrollment) {
      dispatch(enrollCourse(params.slug));
    } else {
      navigate(`/mycourses/${params.slug}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReview({ slug: params.slug, rating: rate, comment }));
    handleClose();
  };

  return (
    <Container>
      {(loading || enrollLoading) && <Loader />}
      {!loading && !enrollLoading && (
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
                  rating={course.ratings}
                  loading={loading}
                />
              )}
              <Review
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                rate={rate}
                comment={comment}
                setRate={setRate}
                setComment={setComment}
                submitted={enrollment && enrollment.reviewed}
                reviews={reviews && reviews}
                enrolled={enrollment && enrollment.enroll}
                isStaff={user.user.is_staff}
                loading={reviewLoading}
              />
            </Grid>
            <Grid item display={{ xs: "none", md: "block" }} md={3.5}>
              {course && (
                <AddToCart
                  key={course._id}
                  price={course.price}
                  onClick={handleAddToCart}
                  enrollment={enrollment && enrollment}
                  image={course.image.Location}
                  isStaff={user.user.is_staff}
                  loading={enrollLoading}
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
                  rating={course.ratings}
                  loading={loading}
                />
              )}
              {course && (
                <AddToCart
                  key={course._id}
                  price={course.price}
                  onClick={handleAddToCart}
                  enrollment={enrollment && enrollment}
                  image={course.image.Location}
                  isStaff={user.user.is_staff}
                  loading={enrollLoading}
                />
              )}
              <Review
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleSubmit={handleSubmit}
                rate={rate}
                comment={comment}
                setRate={setRate}
                setComment={setComment}
                submitted={enrollment && enrollment.reviewed}
                reviews={reviews && reviews}
                enrolled={enrollment && enrollment.enroll}
                isStaff={user.user.is_staff}
                loading={reviewLoading}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default CourseScreen;
