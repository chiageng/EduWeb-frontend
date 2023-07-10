import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import {
  neural500,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  orangeLight,
} from "../design/color";
import { courses } from "../Courses";
import QuizCard from "../components/screenHelpers/QuizCard";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewQuizzes, viewUserQuizzes } from "../actions/quizAction";

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

  const handleCreate = () => {
    navigate(`/mycourses/${params.slug}/myquiz/create`);
  }

  const handlePublished = () => {

  }

  const handleEdit = () => {

  }

  useEffect(() => {
    if (!quizzes && user.user.is_staff) {
      dispatch(viewQuizzes(params.slug))
    }
    if (!quizzes && !user.user.is_staff) {
      dispatch(viewUserQuizzes(params.slug))
    }
  }, [course, quizzes])

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
        My Quizzes
      </Typography>
    </Breadcrumbs>
  );
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
            mb: "16px",
          }}
        >
          My Quizzes {user.user.is_staff && "(Instructor View)"}
        </Typography>

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
                  mr: 2,
                  fontWeight: 600,
                  width: "100%",
                  borderRadius: 3,
                  textDecoration: "none",
                  ":hover": { backgroundColor: orangeLight },
                }}
                onClick={handleCreate}
              >
                Create Quiz
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
            <Grid item>
              <Button
                sx={{
                  backgroundColor: orangeLight,
                  fontFamily: fontType,
                  color: neural900,
                  fontSize: 14,
                  mr: 2,
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
            <Grid item>
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
                  ml: 2,
                  ":hover": { backgroundColor: purplishBlueDark },
                }}
                // href={`/mycourses/${params.id}/myquiz`}
                as={Link}
                to={`/mycourses/${params.slug}`}
              >
                View Lessons
              </Button>
            </Grid>
          </Grid>
        )}

        {/* Buttons if not instructor */}
        {!user.user.is_staff && (<Button
          sx={{
            backgroundColor: purplishBlue,
            fontFamily: fontType,
            color: white,
            fontSize: 14,
            width: "100%",
            borderRadius: 3,
            ":hover": { backgroundColor: purplishBlueDark },
            textDecoration: "none",
            px: 2,
            py: 1,
          }}
          as={Link}
          to={`/mycourses/${params.slug}`}
        >
          View Lessons
        </Button>)}

        {/* QuizCard if is instructor */}
        {user.user.is_staff && <Grid container spacing={2} mt={1}>
          {quizzes && quizzes.map((quiz) => (
            <Grid key={quiz._id} item xs={12} md={4}>
              <QuizCard key={quiz._id} quiz={quiz} is_staff={user.user.is_staff} />
            </Grid>
          ))}
        </Grid>}

        {/* QuizCard if is not instructor */}
        {!user.user.is_staff && <Grid container spacing={2} mt={1}>
          {quizzes && quizzes.map((quiz) => (
            <Grid key={quiz.quiz._id} item xs={12} md={4}>
              <QuizCard key={quiz._id} quiz={quiz.quiz} is_staff={user.user.is_staff} score={quiz.score} done={quiz.done}/>
            </Grid>
          ))}
        </Grid>}
      </Box>
    </Container>
  );
}

export default MyQuizzesScreen;
