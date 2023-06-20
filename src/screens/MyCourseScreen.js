import React, {useEffect} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { neural500, neural900, purplishBlue, white, purplishBlueDark, orangeLight, orangePale } from "../design/color";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewCourse } from "../actions/courseActions";
import Topic from '../components/Topic'

function MyCourseScreen() {
  const params = useParams();
  // const course = courses.find((course) => course._id === params.id);
  // const topics = course.topics;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courseView = useSelector(state => state.courseView);
  const { loading, course, lessons, error } = courseView;

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

  
  useEffect(() => {
    if (!user) {
      navigate('./login');
    }
    dispatch(viewCourse(params.slug));
    
  }, [params, userLogin, user])

  // handle button for create topic for instructor
  const handleButton = () => {
    navigate(`./createtopic`)
  }

  // handle edit course button
  const handleEdit = () => {
    navigate(`./edit`)
  }

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
        {course ? course.title : "Video Topic"}
      </Typography>
    </Breadcrumbs>
  );
  return (
    <Container>
      <Box pt={5} pb={10}>
      {breadcrumb}
      {/* View Quiz button for webpage */}
        <Grid container display="flex" justifyContent="space-between">
          
          <Grid item>
            
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
              {course ? course.title : "Video Topic"}
            </Typography>
            <Grid container display="flex">
              <Grid item mr={2}>
              {user.user.is_staff && <Button
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
              Create Topic
            </Button>}
              </Grid>
              <Grid item>
              {user.user.is_staff && <Button
              sx={{
                backgroundColor: orangeLight,
                fontFamily: fontType,
                color: neural900,
                fontSize: 14,
                mb: 2,
                fontWeight:600,
                width: "100%",
                borderRadius: 3,
                textDecoration: 'none',
                ":hover": { backgroundColor: orangeLight },
              }}
              onClick={handleEdit}
            >
              Edit Course
            </Button>}
              </Grid>
            </Grid>
            

            

          </Grid>
          <Grid item>
          
            <Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                width: "100%",
                borderRadius: 3,
                textDecoration: 'none',
                ":hover": { backgroundColor: purplishBlueDark },
              }}
              // href={`/mycourses/${params.id}/myquiz`}
              as={Link}
              to={`/mycourses/${params.id}/myquiz`}
            >
              View Quiz
            </Button>
          </Grid>
        </Grid>


        
        {lessons && lessons.map((topic) => (
          <Topic key={topic._id} topic={topic} user={user}/>
        ))}
      </Box>
    </Container>
  );
}

export default MyCourseScreen;
