import React, { useEffect } from "react";
import Course from "../components/Course";
// import { courses } from "../Courses";
import { Grid, Box, Typography, Container, Button } from "@mui/material";
import { neural500, neural900 , orangeLight} from "../design/color";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { viewCourses } from "../actions/courseActions";
import { fontType } from "../design/font";
import { useNavigate } from "react-router-dom";

function MyCoursesScreen() {
  const dispatch = useDispatch();
  const coursesView = useSelector(state => state.coursesView);

  const { loading, courses, error } = coursesView;

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  const navigate = useNavigate();


  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
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

  const handleButton = () => {
    navigate("/createcourse")
  }

  return (
    <Container>
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
        My Course
      </Typography>
      {user && user.user.is_staff && 
        <Grid container>
          <Grid item>
          <Button
              sx={{
                backgroundColor: orangeLight,
                fontFamily: fontType,
                color: neural900,
                fontSize: 14,
                mb:2,
                mr: 2,
                fontWeight:600,
                width: "100%",
                borderRadius: 3,
                textDecoration: 'none',
                ":hover": { backgroundColor: orangeLight },
              }}
              onClick={handleButton}
            >
              Create Course
            </Button>
          </Grid>
        </Grid>
        }
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
