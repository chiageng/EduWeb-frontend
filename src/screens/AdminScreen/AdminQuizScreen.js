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
  InputAdornment,
  TextField,
  Divider,
} from "@mui/material";
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
  activeBorderBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
} from "../../design/color";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteQuiz,
  deleteQuizQuestion,
  viewQuiz,
} from "../../actions/quizAction";
import QuizQuestionCard from "../../components/screenHelpers/QuizQuestionCard";
import axios from "axios";
import Loader from "../../components/universal/Loader";
import {
  QUIZZES_VIEW_RESET,
  QUIZ_DELETE_RESET,
  QUIZ_QUESTION_DELETE_RESET,
  QUIZ_VIEW_RESET,
} from "../../constants/quiz";
import { Div } from "../../navbar/AdminAppBar";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import QuizQuestion from "../../components/screenHelpers/QuizQuestion";
import QuizDisplayQuestion from "../../components/screenHelpers/QuizDisplayQuestion";
import ExpandMenu from "../../components/universal/ExpandMenu";

function AdminQuizScreen() {
  const [toggle, setToggle] = useState(false);

  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizView = useSelector((state) => state.quizView);
  const { loading, quiz, course, error, questions } = quizView;

  const quizDelete = useSelector((state) => state.quizDelete);
  const { success: deleteSuccess } = quizDelete;

  const quizQuestionDelete = useSelector((state) => state.quizQuestionDelete);
  const { success: questionDeleteSuccess } = quizQuestionDelete;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const handleAddQuestion = () => {
    navigate(`/admin/courses/${params.slug}/quiz/${params.quizSlug}/create`);
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
    if (quiz.published) {
      window.alert("You are not allowed to delete a published quiz");
    } else {
      let answer = window.confirm("Are you sure you want to delete the quiz?");
      if (answer) {
        dispatch(deleteQuiz({ slug: params.slug, quizSlug: params.quizSlug }));
      }
    }
  };

  const handleDeleteQuestion = (questionId) => {
    let confirm = window.confirm("Are you sure to delete this question?");
    if (confirm) {
      dispatch(
        deleteQuizQuestion({
          slug: params.slug,
          quizSlug: params.quizSlug,
          questionId: questionId,
        })
      );
    }
  };

  const handleEditQuestion = (questionId) => {
    navigate(
      `/admin/courses/${params.slug}/quiz/${params.quizSlug}/${questionId}`
    );
  };

  const options = [{ title: "Delete Quiz", action: handleDelete }];

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
      dispatch({ type: QUIZ_DELETE_RESET });
      navigate(`/admin/courses/${params.slug}/quiz`);
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (questionDeleteSuccess) {
      dispatch({ type: QUIZ_VIEW_RESET });
      dispatch({ type: QUIZ_QUESTION_DELETE_RESET });
    }
  }, [questionDeleteSuccess]);

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
      {loading && (
        <Div>
          <Loader />
        </Div>
      )}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
            <Grid container display="flex" alignItems="center">
              <Grid item xs={12} md={8.5}>
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
                    mb: "18px",
                  }}
                >
                  {quiz && quiz.title}
                </Typography>
              </Grid>

              <Grid item xs={12} md={1.5}>
                <Button
                  endIcon={<AddOutlinedIcon />}
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

              <Grid item xs={false} md={0.15}></Grid>

              <Grid item xs={12} md={1.25} mt={1}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: purplishBlueDark,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "capitalize",
                    fontSize: 12,
                    fontWeight: 600,
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
                  disabled={questions && questions.length === 0}
                  onClick={handlePublished}
                >
                  {quiz && quiz.published ? "Unpublished" : "Published"}
                </Button>
              </Grid>
              <Grid item display={{ xs: "none", md: "flex" }} md={0.15}>
                <ExpandMenu options={options} />
              </Grid>
            </Grid>
          </Div>

          {/* If no quiz */}
          {!questions ||
            (questions.length === 0 && (
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
                  No question currently. Add your first question.
                </Typography>
                </Div>
              </Box>
            ))}

          <Div>
            <Grid container spacing={2} mt={1}>
              {questions &&
                questions.map((item) => (
                  <>
                    <Grid key={item.question._id} item xs={12}>
                      <QuizDisplayQuestion
                        questions={questions}
                        currentQuestion={questions.indexOf(item)}
                        admin={true}
                        handleEdit={handleEditQuestion}
                        handleDelete={handleDeleteQuestion}
                      />
                      <QuizQuestion
                        question={item.question}
                        selections={item.choice}
                        chosenAnswer={item.question.answer}
                        correctAnswer={item.question.answer}
                      />
                    </Grid>
                  </>
                ))}
            </Grid>
          </Div>
        </>
      )}
    </>
  );
}

export default AdminQuizScreen;
