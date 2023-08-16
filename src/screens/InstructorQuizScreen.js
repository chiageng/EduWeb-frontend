import React, { useEffect, useState } from "react";
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
  hoverBlueButton,
  activeBlueButton,
  pressedBlueButton,
  activeRedButton,
  hoverRedButton,
  pressedRedButton,
  disabledButton,
  disabledButtonText,
} from "../design/color";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz, viewQuiz } from "../actions/quizAction";
import QuizQuestionCard from "../components/screenHelpers/QuizQuestionCard";
import axios from "axios";
import Loader from "../components/universal/Loader";
import { QUIZZES_VIEW_RESET, QUIZ_DELETE_RESET } from "../constants/quiz";

function InstructorQuizzesScreen() {
  const [toggle, setToggle] = useState(false);

  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizView = useSelector((state) => state.quizView);
  const { loading, quiz, course, error, questions } = quizView;

  const quizDelete = useSelector(state => state.quizDelete);
  const { success:deleteSuccess } = quizDelete;

  const handleAddQuestion = () => {
    navigate(
      `/mycourses/${params.slug}/myquiz/${params.quizSlug}/instructor/create`
    );
  };

  const handlePublished = async () => {
    if (quiz && quiz.published == false) {
      // want to publish
      let answer = window.confirm(
        "Once you publish, it will be available for students"
      );
      if (answer) {
        const { data } = await axios.put(
          `/api/course/${params.slug}/quiz/${params.quizSlug}/publish`
        );
        setToggle((prev) => !prev);
      }
    }

    if (quiz && quiz.published) {
      let answer = window.confirm(
        "Once you unpublish, it will be not available for students"
      );
      if (answer) {
        const { data } = await axios.put(
          `/api/course/${params.slug}/quiz/${params.quizSlug}/unpublish`
        );
        setToggle((prev) => !prev);
      }
    }
  };

  const handleDelete = () => {
    dispatch(deleteQuiz({ slug: params.slug, quizSlug: params.quizSlug }))
  };

  const handleEdit = () => {
    navigate(`/mycourses/${params.slug}/myquiz/${params.quizSlug}/edit`);
  };

  useEffect(() => {
    if (!quiz || params.quizSlug !== quiz.slug) {
      dispatch(viewQuiz(params.slug, params.quizSlug));
    }
  }, [course, quiz, params]);

  useEffect(() => {
    dispatch(viewQuiz(params.slug, params.quizSlug));
    dispatch({ type: QUIZZES_VIEW_RESET });
  }, [toggle]);

  useEffect(() => {
    if (deleteSuccess) {
      dispatch({ type: QUIZ_DELETE_RESET })
      navigate(`/mycourses/${params.slug}/myquiz`)
    }
  }, [deleteSuccess])

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
        as={Link}
        to={`/mycourses/${params.slug}/myquiz`}
      >
        My Quizzes
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        {quiz && quiz.title}
      </Typography>
    </Breadcrumbs>
  );
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
              mb: "16px",
            }}
          >
            {course && course.title} - {quiz && quiz.title}{" "}
            {user.user.is_staff && "(Instructor View)"}
          </Typography>

          {/* Buttons */}
          {user && user.user.is_staff && (
            <Grid container display="flex" width="100%">
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    mb: 2,
                    mr: 2,
                    px: 2,
                    py: 1,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handleAddQuestion}
                >
                  Add Question
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
                  Edit Quiz
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: orangeLight,
                    fontFamily: fontType,
                    color: neural900,
                    fontSize: 14,
                    px: 2,
                    py: 1,
                    mb: 2,
                    fontWeight: 600,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                  onClick={handlePublished}
                  disabled={questions && questions.length === 0}
                >
                  {quiz && quiz.published ? "Unpublished" : "Published"}
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    width: "100%",
                    borderRadius: 3,
                    textDecoration: "none",
                    px: 2,
                    py: 1,
                    mb: 2,
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  onClick={() => navigate(`/mycourses/${params.slug}/myquiz`)}
                >
                  Go Back
                </Button>
              </Grid>
              <Grid item mr={2}>
                <Button
                  sx={{
                    backgroundColor: activeRedButton,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    p: 1,
                    ":hover": { backgroundColor: hoverRedButton },
                    ":active": { backgroundColor: pressedRedButton },
                    ":disabled": {
                      backgroundColor: disabledButton,
                      color: disabledButtonText,
                    },
                  }}
                  onClick={handleDelete}
                >
                  Delete Quiz
                </Button>
              </Grid>
            </Grid>
          )}

          <Grid container spacing={2} mt={1}>
            {questions &&
              questions.map((item) => (
                <Grid key={item.question._id} item xs={12} md={4}>
                  <QuizQuestionCard question={item.question} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default InstructorQuizzesScreen;
