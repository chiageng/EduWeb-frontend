import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  neural500,
  neural900,
  purplishBlue,
  white,
  purplishBlueDark,
  orangeLight,
  activeBorderBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  activeOrangeButton,
  hoverOrangeButton,
  pressedOrangeButton,
} from "../design/color";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewCourse } from "../actions/courseActions";
import Topic from "../components/screenHelpers/Topic";
import Loader from "../components/universal/Loader";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

function MyCourseScreen() {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  
  const courseView = useSelector((state) => state.courseView);
  const { loading, course, lessons, error } = courseView;
  
  const topicDelete = useSelector((state) => state.topicDelete);
  const { loading: topicLoading, success } = topicDelete;
  
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
  
  const [filteredLessons, setFilteredLessons] = useState(lessons)

  // handle button for create topic for instructor
  const handleButton = () => {
    navigate(`./createtopic`);
  };

  // handle edit course button
  const handleEdit = () => {
    navigate(`./edit`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let updatedList = [...lessons];
    
    updatedList = updatedList.filter(item => {
      return item.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    })

    setFilteredLessons(updatedList);
  }

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

          <Grid container display="flex" alignItems="center">
            <Grid item xs={12} md={7}>
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
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                margin="normal"
                value={search}
                onChange={handleSearch}
                name="search"
                label={`Search Topic`}
                id="search"
                InputProps={{
                  style: {
                    backgroundColor: white,
                  },
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={false} md={0.25}></Grid>

            <Grid item xs={12} md={1.5}>
              <Button
                variant="outlined"
                fullWidth
                endIcon={<QuizOutlinedIcon />}
                sx={{
                  color: purplishBlueDark,
                  py: 1.5,
                  mt: 1,
                  borderRadius: 2,
                  textTransform: "capitalize",
                  fontSize: 12,
                  fontWeight: 600,
                  lineHeight: "140%",
                  borderColor: activeBorderBlueButton,
                  backgroundColor: white,
                  ":hover": {
                    borderColor: hoverBorderBlueButton,
                  },
                  ":focus": {
                    bgcolor: pressedBorderBackgroundBlueButton,
                    borderColor: pressedBorderBlueButton,
                  },
                }}
                onClick={() => navigate(`/mycourses/${params.slug}/myquiz`)}
              >
                View Quiz
              </Button>

            </Grid>
          </Grid>

          {/* Button if is instructor */}
          {user && user.user.is_staff && (
            <Grid container display="flex" mt={2}>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeOrangeButton,
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
                    ":hover": { backgroundColor: hoverOrangeButton },
                    ":focus": { backgroundColor: pressedOrangeButton},
                  }}
                  onClick={handleButton}
                >
                  Create Topic
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeOrangeButton,
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
                    ":hover": { backgroundColor: hoverOrangeButton },
                    ":focus": { backgroundColor: pressedOrangeButton},
                  }}
                  onClick={handleEdit}
                >
                  Edit Course
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeOrangeButton,
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
                    ":hover": { backgroundColor: hoverOrangeButton },
                    ":focus": { backgroundColor: pressedOrangeButton},
                  }}
                  onClick={handlePublished}
                >
                  {course && course.published ? "Unpublished" : "Published"}
                </Button>
              </Grid>

              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeOrangeButton,
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
                    ":hover": { backgroundColor: hoverOrangeButton },
                    ":focus": { backgroundColor: pressedOrangeButton},
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

            </Grid>
          )}

          <Box mt={2}>
            {search === "" && lessons && 
              lessons.map((topic) => (
                <Topic key={topic._id} topic={topic} user={user} />
              ))}
              {search !== "" && filteredLessons && 
                filteredLessons.map((topic) => (
                <Topic key={topic._id} topic={topic} user={user} />
              ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default MyCourseScreen;
