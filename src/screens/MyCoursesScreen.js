import React, { useEffect } from "react";
import Course from "../components/screenHelpers/Course";
// import { courses } from "../Courses";
import { Grid, Box, Typography, Container, Button } from "@mui/material";
import { neural500, neural900, orangeLight } from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { userViewCourses, viewCourses } from "../actions/courseActions";
import { fontType } from "../design/font";
import { useNavigate } from "react-router-dom";
import Loader from "../components/universal/Loader";

function MyCoursesScreen() {
  const dispatch = useDispatch();
  const coursesView = useSelector((state) => state.coursesView);
  const { loading, courses, error } = coursesView;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user && !courses && !user.user.is_staff) {
      dispatch(userViewCourses());
    }
    if (user && !courses && user.user.is_staff) {
      dispatch(viewCourses());
    }
    if (courses) {
      console.log(courses.courses);
    }
  }, [user, courses]);

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
        My Course {user && user.user.is_staff && "(Instructor Page)"}
      </Typography>
    </Breadcrumbs>
  );

  const handleButton = () => {
    navigate("/createcourse");
  };

  return (
    <Container>
      {loading && <Loader />}
      {!loading && (
        <Box pt={5} pb={10}>
          {breadcrumb}
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
            My Course {user && user.user.is_staff && "(Instructor Page)"}
          </Typography>
          {user && user.user.is_staff && (
            <Grid container>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    mr: 2,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handleButton}
                >
                  Create Course
                </Button>
              </Grid>
            </Grid>
          )}

          {/* display courses if is not staff */}
          {courses &&
            !user.user.is_staff &&(
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} md={3} key={course.course._id}>
                    <Course
                      course={course.course}
                      staff={user.user.is_staff}
                      progress={course.progress}
                    ></Course>
                  </Grid>
                ))}
              </Grid>
            )}{" "}

            {/* display courses if is staff (different data structure) */}
          {courses &&
            user.user.is_staff && (
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} md={3} key={0}>
                    <Course
                      course={course}
                      staff={user.user.is_staff}
                    ></Course>
                  </Grid>
                ))}
              </Grid>
            )}{" "}
        </Box>
      )}
    </Container>
  );
}

export default MyCoursesScreen;
