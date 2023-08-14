import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import {
  neural500,
  neural900,
  purplishBlue,
  white,
  purplishBlueDark,
  orangeLight,
} from "../design/color";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewCourse } from "../actions/courseActions";
import Topic from "../components/screenHelpers/Topic";
import Loader from "../components/universal/Loader";
import axios from "axios";

function MyCourseScreen() {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const courseView = useSelector((state) => state.courseView);
  const { loading, course, lessons, error } = courseView;

  const topicDelete = useSelector((state) => state.topicDelete);
  const { loading: topicLoading, success } = topicDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  // handle button for create topic for instructor
  const handleButton = () => {
    navigate(`./createtopic`);
  };

  // handle edit course button
  const handleEdit = () => {
    navigate(`./edit`);
  };

  const handlePublished = async () => {
    if (course && course.published == false) {
      // want to publish
      let answer = window.confirm(
        "Once you publish, it will be available for enrollment"
      );
      if (answer) {
        const { data } = await axios.put(`/api/course/${params.slug}/publish`);
        setToggle((prev) => !prev);
      }
    }

    if (course && course.published) {
      let answer = window.confirm(
        "Once you unpublish, it will be not available for enrollment"
      );
      if (answer) {
        const { data } = await axios.put(
          `/api/course/${params.slug}/unpublish`
        );
        setToggle((prev) => !prev);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("./login");
    }
    if ((user && !course) || course.slug !== params.slug) {
      dispatch(viewCourse(params.slug));
    }
  }, [params, userLogin, user, topicDelete]);

  useEffect(() => {
    dispatch(viewCourse(params.slug));
  }, [toggle]);

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/mycourses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        My Course
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        {course ? course.title : "Video Topic"}{" "}
        {user && user.user.is_staff && "(Instructor Page)"}
      </Typography>
    </Breadcrumbs>
  );
  return (
    <Container>
      {(loading || topicLoading) && <Loader />}
      {!loading && !topicLoading && (
        <Box pt={5} pb={10}>
          {breadcrumb}

          {/* View Quiz button for webpage */}
          <Grid container display="flex" justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                fontFamily="Poppins"
                sx={{
                  fontSize: 32,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: "18px",
                }}
              >
                {course ? course.title : "Video Topic"}{" "}
                {user && user.user.is_staff && "(Instructor Page)"}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container display="flex" alignContent="flex-end">
                <Grid item xs={12} md={6}>
                  Search
                </Grid>
                <Grid item xs={12} md={6}>
                  view quiz
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          {/* Button if is instructor */}
          {user && user.user.is_staff && (
            <Grid container display="flex">
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handleButton}
                >
                  Create Topic
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handleEdit}
                >
                  Edit Course
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handlePublished}
                >
                  {course && course.published ? "Unpublished" : "Published"}
                </Button>
              </Grid>

              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={() =>
                    navigate(
                      `/mycourses/checkStudentsEnrollment/${params.slug}`
                    )
                  }
                >
                  Students Enrollment
                </Button>
              </Grid>

              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    px: 2,
                    py: 1,
                    ":hover": { backgroundColor: purplishBlueDark },
                  }}
                  onClick={() => navigate(`/mycourses/${params.slug}/myquiz`)}
                >
                  View Quiz
                </Button>
              </Grid>
            </Grid>
          )}

          {/* Button if not instructor */}
          {!user.user.is_staff && (
            <>
              <Grid container display={{ xs: "none", md: "block" }}>
                <Grid item xs={1.5}>
                  <Button
                    sx={{
                      backgroundColor: purplishBlue,
                      fontFamily: fontType,
                      color: white,
                      fontSize: 14,
                      width: "100%",
                      borderRadius: 3,
                      textDecoration: "none",
                      px: 2,
                      py: 1,
                      ":hover": { backgroundColor: purplishBlueDark },
                    }}
                    onClick={() => navigate(`/mycourses/${params.slug}/myquiz`)}
                  >
                    View Quiz
                  </Button>
                </Grid>
              </Grid>

              <Grid container display={{ xs: "block", md: "none" }}>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      backgroundColor: purplishBlue,
                      fontFamily: fontType,
                      color: white,
                      fontSize: 14,
                      width: "100%",
                      borderRadius: 3,
                      textDecoration: "none",
                      px: 2,
                      py: 1,
                      ":hover": { backgroundColor: purplishBlueDark },
                    }}
                    onClick={() => navigate(`/mycourses/${params.slug}/myquiz`)}
                  >
                    View Quiz
                  </Button>
                </Grid>
              </Grid>
            </>
          )}

          <Box mt={2}>
            {lessons &&
              lessons.map((topic) => (
                <Topic key={topic._id} topic={topic} user={user} />
              ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default MyCourseScreen;
