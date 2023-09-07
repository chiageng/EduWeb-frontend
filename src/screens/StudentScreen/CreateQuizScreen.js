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
} from "../../design/color";
import QuizForm from "../../components/forms/QuizForm";
import { createQuiz } from "../../actions/quizAction";
import { QUIZZES_VIEW_RESET, QUIZ_CREATE_RESET } from "../../constants/quiz";

function CreateQuizScreen() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizCreate = useSelector(state => state.quizCreate);
  const{ loading, success, error } = quizCreate;

  const navigate = useNavigate();

  const params = useParams();

  const handleSubmit  = (e) => {
    e.preventDefault();
    dispatch(createQuiz(params.slug, title));
  }
  
  useEffect(() => {
    if (success) {
      dispatch({type: QUIZZES_VIEW_RESET})
      dispatch({type: QUIZ_CREATE_RESET})
      navigate(`/mycourses/${params.slug}/myquiz`)
    }
  }, [success])

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
            Create Quiz
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

export default CreateQuizScreen;