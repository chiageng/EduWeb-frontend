import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Grid, Typography } from "@mui/material";
import { neural500, neural900, white } from "../../design/color";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, viewCourse, viewCourses } from "../../actions/courseActions";
import { Div } from "../../navbar/AdminAppBar";
import Loader from "../../components/universal/Loader";
import AdminCourseCard from "../../components/adminScreenHelpers/AdminCourseCard";
import { COURSES_VIEW_RESET, COURSE_DELETE_RESET } from "../../constants/course";
import Message from "../../components/universal/Message";

function AdminCourses() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const coursesView = useSelector((state) => state.coursesView);
  const { loading, courses, error } = coursesView;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const courseDelete = useSelector(state => state.courseDelete);
  const { success, error:deleteError} = courseDelete;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user && !courses && user.user.is_staff) {
      dispatch(viewCourses());
    }
  }, [user, courses]);

  const handleButton = () => {
    navigate("/createcourse");
  };

  const handleDelete = (isPublished, slug) => {
    if (isPublished) {
      window.alert("You are not allowed to delete a published course")
    } else {
      let confirm = window.confirm("Are you sure you want to delete this course?")
      if (confirm) {
        dispatch(deleteCourse({slug}))
      }
    }
  }

  useEffect(() => {
    if (success) {
      dispatch({ type : COURSES_VIEW_RESET})
      dispatch({ type : COURSE_DELETE_RESET});
    }
  }, [success])

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/admin"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Home
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Courses
      </Typography>
    </Breadcrumbs>
  );
  return (
    <>
      {loading && <Div><Loader /></Div>}
      {!loading && error && <Message type="error">{error}</Message>}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
            <Typography
              variant="h3"
              fontFamily={fontType}
              sx={{
                fontSize: 24,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              My Courses
            </Typography>
          </Div>

          {/* If no quiz */}
          {!courses ||
            (courses.length === 0 && (
              <Box mt={3} mx={1.5}>
                <Div style={{ backgroundColor: white }}>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 16,
                    fontWeight: 400,
                    fontStyle: "normal",
                    color: neural500,
                    textAlign: "center",
                    py: 2,
                  }}
                >
                  No course currently. Add your first course.
                </Typography>
                </Div>
              </Box>
            ))}

          <Div>
            {courses && (
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} sm={4} md={3} key={course.course._id}>
                    <AdminCourseCard course={course.course} handleDelete={handleDelete}></AdminCourseCard>
                  </Grid>
                ))}
              </Grid>
            )}{" "}
          </Div>
        </>
      )}
    </>
  );
}

export default AdminCourses;
