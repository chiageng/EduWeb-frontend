import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button, InputAdornment, TextField } from "@mui/material";
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
  neural700,
} from "../../design/color";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuiz, viewQuiz } from "../../actions/quizAction";
import QuizQuestionCard from "../../components/screenHelpers/QuizQuestionCard";
import axios from "axios";
import Loader from "../../components/universal/Loader";
import { QUIZZES_VIEW_RESET, QUIZ_DELETE_RESET } from "../../constants/quiz";
import { Div } from "../../navbar/AdminAppBar";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import QuizQuestion from "../../components/screenHelpers/QuizQuestion";
import QuizDisplayQuestion from "../../components/screenHelpers/QuizDisplayQuestion";



function AdminQuizScreen() {
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

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

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

  const handleEdit = (questionId) => {
    navigate(`/admin/courses/${params.slug}/quiz/${params.quizSlug}/${questionId}`);
  };

  useEffect(() => {
    if (!quiz || params.quizSlug !== quiz.slug) {
      dispatch(viewQuiz(params.slug, params.quizSlug));
    }
  }, [course, quiz, params, open]);

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
        as={Link}
        to="/admin/courses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Courses
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${course && course.slug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {course && course.title}
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${course && course.slug}/quiz`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {quiz && quiz.title}
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Edit Quiz
      </Typography>
    </Breadcrumbs>
  );

  return (
    <>
      {loading && <Div><Loader /></Div>}
      {!loading && (
        <>
        <Div style={{ backgroundColor: white }}>
          {breadcrumb}
          <Grid container display="flex" alignItems="center" justifyContent="space-between">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural900,
                    mb: "18px",
                  }}
                >
                  Edit Quiz
                </Typography>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural700,
                  }}
                >
                  {quiz && quiz.title }
                </Typography>
              </Grid>
             

              <Grid item xs={12} md={1.5}>
                <Button
                  endIcon={<AddOutlinedIcon/>}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    borderRadius: 2,

                    py: 1.5,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  onClick={handleAddQuestion}
                >
                  Add Question
                </Button>
              </Grid>
            </Grid>

          {/* Buttons */}
          {/* {user && user.user.is_staff && (
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
          )} */}
          </Div>
          
          <Div>

          <Grid container spacing={2} mt={1}>
            {questions &&
              questions.map((item) => (
                <Grid key={item.question._id} item xs={12} >
                  <QuizDisplayQuestion questions={questions} currentQuestion={questions.indexOf(item)} admin={true} handleEdit={handleEdit}/>
                  <QuizQuestion question={item.question} selections={item.choice} chosenAnswer={item.question.answer} correctAnswer={item.question.answer}/>
                </Grid>
              ))}
          </Grid>
          </Div>
        </>
      )}
    </>
  );
}

export default AdminQuizScreen;
