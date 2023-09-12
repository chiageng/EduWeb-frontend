import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  Container,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useNavigate, useParams } from "react-router-dom";
import {
  neural500,
  neural700,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  purplishBlueLight,
  hoverBlueButton,
  disabledButton,
  disabledButtonText,
  activeBorderBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  activeBlueButton,
  pressedBlueButton,
} from "../../design/color";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import QuizQuestion from "../../components/screenHelpers/QuizQuestion";
import { fontType } from "../../design/font";
import SimpleBackdrop from "../../components/universal/SimpleBackdrop";
import { useDispatch, useSelector } from "react-redux";
import { userSaveQuiz, userViewQuiz } from "../../actions/quizAction";
import {
  QUIZZES_VIEW_RESET,
  QUIZ_SAVE_RESET,
  QUIZ_VIEW_RESET,
} from "../../constants/quiz";
import QuizDisplayQuestion from "../../components/screenHelpers/QuizDisplayQuestion";

export const MyQuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [end, setEnd] = useState(false);
  const [selections, setSelections] = useState();

  // const quiz = DUMMY_QUIZ;
  // const selections = quiz[currentQuestion].answers;

  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizView = useSelector((state) => state.quizView);
  const { loading, quiz, course, error, questions, solutions, userQuiz } =
    quizView;

  const quizSave = useSelector((state) => state.quizSave);
  const { success } = quizSave;

  const buttonHandler = (e) => {
    if (userQuiz.done) {
      navigate(`/mycourses/${params.slug}/myquiz`);
    } else {
      dispatch(
        userSaveQuiz({
          slug: params.slug,
          quizSlug: params.quizSlug,
          quizId: userQuiz._id,
          score,
          solutions,
        })
      );
      dispatch({ type: QUIZZES_VIEW_RESET });
    }
  };

  const submitHandler = (e) => {
    if (solutions && !solutions[currentQuestion]) {
      solutions.push(chosenAnswer);
      if (chosenAnswer === questions[currentQuestion].question.answer) {
        setScore((prev) => prev + 1);
      }
    }
    setSubmit(true);
  };

  const clickHandler = (e) => {
    setChosenAnswer(e.target.value);
  };

  const nextHandler = () => {
    if (currentQuestion + 1 === questions.length) {
      setEnd(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setChosenAnswer("");
      setSubmit(false);
    }
  };

  const prevHandler = () => {
    setCurrentQuestion((prev) => prev - 1);
    setSubmit(true);
  };

  useEffect(() => {
    if (!quiz || quiz.slug !== params.quizSlug) {
      setSelections();
      setChosenAnswer("");
      setCurrentQuestion(0);
      setSubmit(false);
      setEnd(false);
      dispatch({ type: QUIZ_VIEW_RESET });
      dispatch(userViewQuiz(params.slug, params.quizSlug));
    }

    if (userQuiz && userQuiz.done) {
      setScore(userQuiz.score);
    } else {
      setScore(0);
    }

    if (
      solutions &&
      solutions.length >= currentQuestion &&
      solutions[currentQuestion]
    ) {
      setChosenAnswer(solutions[currentQuestion]);
      setSubmit(true);
    }

    if (questions) {
      setSelections(questions[currentQuestion].choice);
    }

    if (success) {
      navigate(`/mycourses/${params.slug}/myquiz`);
      dispatch({ type: QUIZ_SAVE_RESET });
    }
  }, [course, quiz, currentQuestion, selections, params, success, userQuiz]);

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
        as={Link}
        to={`/mycourses/${params.slug}/myquiz`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        My Quizzes
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Quiz Title
      </Typography>
    </Breadcrumbs>
  );

  return (
    <Container>
      {end && (
        <SimpleBackdrop
          end={end}
          result={score}
          totalQuestions={questions && questions.length}
          onClick={() => setEnd(false)}
          buttonHandler={buttonHandler}
        />
      )}

      {questions && (
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
              mb: "32px",
            }}
          >
            {quiz && quiz.title}
          </Typography>


          <QuizDisplayQuestion questions={questions} currentQuestion={currentQuestion} />

          {/* Before submission Design for Quiz Question*/}
          {!submit && (
            <QuizQuestion
              selections={selections}
              onClick={clickHandler}
            ></QuizQuestion>
          )}

          {/* After submission Design for Quiz Question*/}
          {submit && (
            <QuizQuestion
              selections={selections}
              onClick={clickHandler}
              chosenAnswer={chosenAnswer}
              correctAnswer={questions[currentQuestion].question.answer}
            ></QuizQuestion>
          )}

          {/* After submission show explanation */}
          {submit && (
            <Card
              sx={{
                display: "flex",
                borderRadius: "5px",
                mb: "16px",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", flexGrow: 1 }}>
                <CardContent>
                  <Typography
                    component="div"
                    variant="h5"
                    fontFamily={fontType}
                    fontWeight={900}
                    color={neural900}
                    fontSize="16px"
                  >
                    Explanation
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={neural700}
                    fontSize="16px"
                    fontFamily={fontType}
                    component="div"
                  >
                    Answer : {questions[currentQuestion].question.answer}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color={neural500}
                    fontSize="16px"
                    fontFamily={fontType}
                    component="div"
                  >
                    {questions[currentQuestion].question.explanation}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          )}

          {/* Before submission submit button design */}
          {!submit && (
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    px: 4,
                    py: 1,
                    borderRadius: 3,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":disabled": {
                      backgroundColor: disabledButton,
                      color: disabledButtonText,
                    },
                    ":focus": { backgroundColor: pressedBlueButton}
                  }}
                  onClick={submitHandler}
                  disabled={chosenAnswer === ""}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          )}

          {/* After submission buttons webpage design */}
          {submit && (
            <Grid container display="flex" justifyContent="space-between">
              <Grid item xs={12} md={2} mt={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: purplishBlueDark,
                    textTransform: "capitalize",
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: 14,
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
                    ":disabled": {
                      bgcolor: disabledButton,
                      color: disabledButtonText,
                      borderColor: white,
                    },
                  }}
                  onClick={prevHandler}
                  disabled={currentQuestion === 0}
                  startIcon={<ArrowBackOutlinedIcon/>}
                >
                  Previous Question
                </Button>
              </Grid>
              <Grid item md={2} xs={12} mt={2}>
                <Button
                  fullWidth
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    textTransform: "capitalize",
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: 14,
                    color: white,
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":disabled": {
                      backgroundColor: disabledButton,
                      color: disabledButtonText,
                    },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  endIcon={<ArrowForwardOutlinedIcon/>}
                  onClick={nextHandler}
                >
                  Next Question
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
};
