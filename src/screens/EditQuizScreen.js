import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
} from "@mui/material";
import {
  neural900,
} from "../design/color";
import QuizForm from "../components/forms/QuizForm";
import {  editQuiz, viewQuiz } from "../actions/quizAction";
import { QUIZZES_VIEW_RESET, QUIZ_EDIT_RESET } from "../constants/quiz";

function EditQuizScreen() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizEdit = useSelector(state => state.quizEdit);
  const{ loading, success, error } = quizEdit;

  const quizView = useSelector(state => state.quizView);
  const { quiz, loading:viewLoading, course } = quizView;

  const navigate = useNavigate();

  const params = useParams();

  const handleSubmit  = (e) => {
    e.preventDefault();
    dispatch(editQuiz(params.slug, params.quizSlug, title));
  }
  
  useEffect(() => {
    if (success) {
      dispatch({type: QUIZZES_VIEW_RESET})
      dispatch({type: QUIZ_EDIT_RESET})
      navigate(`/mycourses/${params.slug}/myquiz`)
    }

    if (!quiz || params.quizSlug !== quiz.slug) {
      dispatch(viewQuiz(params.slug, params.quizSlug))
    }

    if (quiz) {
      setTitle(quiz.title);
    }
  }, [success, course, quiz, params])

  return (
    <Container>
        <Box pt={5} pb={10}>
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
            Edit Quiz
          </Typography>
          <QuizForm
            setTitle={setTitle}
            title={title}
            handleSubmit={handleSubmit}
          />
        </Box>
    </Container>
  );
}

export default EditQuizScreen;