import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button, TextField, InputAdornment } from "@mui/material";
import {
  neural500,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  orangeLight,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  hoverBorderBlueButton,
  activeBorderBlueButton,
  hoverOrangeButton,
  pressedOrangeButton,
  activeOrangeButton,
} from "../design/color";
import QuizCard from "../components/screenHelpers/QuizCard";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewQuizzes, viewUserQuizzes } from "../actions/quizAction";
import Loader from "../components/universal/Loader";
import SearchIcon from "@mui/icons-material/Search";
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';

function MyQuizzesScreen() {
  const params = useParams();
  // const course = courses[0];
  // const quizzes = course.quiz;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;
  
  const quizzesView = useSelector(state => state.quizzesView)
  const { loading, quizzes, course, error } = quizzesView;
  
  const [search, setSearch] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes)

  const handleCreate = () => {
    navigate(`/mycourses/${params.slug}/myquiz/create`);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let updatedList = [...quizzes];
    
    updatedList = updatedList.filter(item => {
      return item.quiz.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
    })

    setFilteredQuizzes(updatedList);
  }

  useEffect(() => {
    if (!quizzes && user.user.is_staff ) {
      dispatch(viewQuizzes(params.slug))
    }
    if (!quizzes && !user.user.is_staff) {
      dispatch(viewUserQuizzes(params.slug))
    }

    if (quizzes && course.slug !== params.slug && user.user.is_staff) {
      dispatch(viewQuizzes(params.slug))
    }

    if (quizzes && course.slug !== params.slug && !user.user.is_staff) {
      dispatch(viewUserQuizzes(params.slug))
    }
  }, [course, quizzes, params])

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
        {course && course.title} - Quiz
      </Typography>
    </Breadcrumbs>
  );
  return (
    <Container>
      {loading && <Loader/>}
      {!loading && <Box pt={5} pb={10}>
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
                {course ? course.title : "Quiz Page"}{" "}
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
                label={`Search Quiz`}
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
                endIcon={<TopicOutlinedIcon />}
                sx={{
                  color: purplishBlueDark,
                  textTransform: "capitalize",
                  py: 1.5,
                  mt: 1,
                  borderRadius: 2,
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
                onClick={() => navigate(`/mycourses/${params.slug}`)}
              >
                Watch Lesson
              </Button>

            </Grid>
          </Grid>

        {/* Button if is instructor */}
        {user && user.user.is_staff && (
          <Grid container display="flex">
            <Grid item mr={2} mt={2}>
              <Button
                sx={{
                  backgroundColor: activeOrangeButton,
                  fontFamily: fontType,
                  color: neural900,
                  fontSize: 14,
                  mr: 2,
                  px: 2,
                  py: 1,
                  fontWeight: 600,
                  width: "100%",
                  borderRadius: 3,
                  textDecoration: "none",
                  ":hover": { backgroundColor: hoverOrangeButton},
                  ":focus": { backgroundColor: pressedOrangeButton },
                }}
                onClick={handleCreate}
              >
                Create Quiz
              </Button>
            </Grid>
          </Grid>
        )}

        {/* QuizCard */}
        <Grid container spacing={2} mt={1}>
          { search === "" && quizzes && quizzes.map((quiz) => (
            <Grid key={quiz.quiz._id} item xs={12} md={4} width="100%">
              <QuizCard key={quiz._id} quiz={quiz.quiz} is_staff={user.user.is_staff} score={quiz.score} done={quiz.done} published={quiz.quiz.published}/>
            </Grid>
          ))}
          { search !== "" && filteredQuizzes && filteredQuizzes.map((quiz) => (
            <Grid key={quiz.quiz._id} item xs={12} md={4} width="100%">
              <QuizCard key={quiz._id} quiz={quiz.quiz} is_staff={user.user.is_staff} score={quiz.score} done={quiz.done} published={quiz.quiz.published}/>
            </Grid>
          ))}
        </Grid>
      </Box>}
    </Container>
  );
}

export default MyQuizzesScreen;
