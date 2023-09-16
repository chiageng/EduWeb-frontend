import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Breadcrumbs } from "@mui/material";
import { neural500, neural900, white } from "../../design/color";
import QuizForm from "../../components/forms/QuizForm";
import { editQuiz, viewQuiz } from "../../actions/quizAction";
import { QUIZZES_VIEW_RESET, QUIZ_EDIT_RESET } from "../../constants/quiz";
import { Div } from "../../navbar/AdminAppBar";
import unslugify from "unslugify";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Message from "../../components/universal/Message";
import Loader from "../../components/universal/Loader";

function EditQuizScreen() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizEdit = useSelector((state) => state.quizEdit);
  const { loading, success, error } = quizEdit;

  const quizView = useSelector((state) => state.quizView);
  const { quiz, loading: viewLoading, course } = quizView;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const navigate = useNavigate();

  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editQuiz(params.slug, params.quizSlug, title));
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: QUIZZES_VIEW_RESET });
      dispatch({ type: QUIZ_EDIT_RESET });
      navigate(`/admin/courses/${params.slug}/quiz`);
    }

    if (!quiz || params.quizSlug !== quiz.slug) {
      dispatch(viewQuiz(params.slug, params.quizSlug));
    }

    if (quiz) {
      setTitle(quiz.title);
    }
  }, [success, course, quiz, params]);

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
        to={`/admin/courses/${params.slug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {unslugify(params.slug)}
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${params.slug}/quiz`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Quiz Topic
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
      {!loading && error && <Message type="error">{error}</Message>}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
            <Typography
              variant="h3"
              fontFamily="Poppins"
              sx={{
                fontSize: 32,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              Edit Quiz
            </Typography>
          </Div>
          <Div>
            <QuizForm
              setTitle={setTitle}
              title={title}
              handleSubmit={handleSubmit}
              update={true}
            />
          </Div>
        </>
      )}
    </>
  );
}

export default EditQuizScreen;
