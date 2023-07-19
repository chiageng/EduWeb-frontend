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
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import {
  neural500,
  neural700,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  purplishBlueLight,
} from "../design/color";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/screenHelpers/QuizQuestion";
import { fontType } from "../design/font";
import SimpleBackdrop from "../components/universal/SimpleBackdrop";
import { useDispatch, useSelector } from "react-redux";
import { userSaveQuiz, userViewQuiz } from "../actions/quizAction";
import { QUIZZES_VIEW_RESET, QUIZ_VIEW_RESET } from "../constants/quiz";

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
        to={`/mycourses/${params.id}/myquiz`}
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

  const output = <></>;

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
          <Typography
            variant="h3"
            fontFamily={fontType}
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
              mb: "8px",
            }}
          >
            Question {currentQuestion + 1} / {questions && questions.length}
          </Typography>
          <Typography
            variant="h3"
            fontFamily={fontType}
            sx={{
              fontSize: 24,
              fontWeight: 600,
              fontStyle: "normal",
              color: neural900,
              mb: "32px",
            }}
          >
            {questions[currentQuestion].question.question}
          </Typography>

          {/* If got image */}
          {questions[currentQuestion].question.image && (
            // <Card
            //   sx={{
            //     borderRadius: "5px",
            //     mb: "16px",
            //     width: "auto"
            //   }}
            // >
            //   <CardMedia
            //   sx={{height: 100}}
            //     image={questions[currentQuestion].question.image.Location}
            //   />
            // </Card>
            <img src={questions[currentQuestion].question.image.Location}></img>
          )}

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
                width: "90%",
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

          {/* Before submission submit button webpage design */}
          {!submit && (
            <Grid container display={{ xs: "none", md: "flex" }}>
              <Grid item md={10}></Grid>
              <Grid item md={2}>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    ":hover": { backgroundColor: purplishBlueDark },
                    ":disabled": { backgroundColor: purplishBlueLight },
                  }}
                  onClick={submitHandler}
                  disabled={chosenAnswer === ""}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          )}

          {/* Before submission submit button phone design */}
          {!submit && (
            <Grid container display={{ xs: "flex", md: "none" }}>
              <Button
                sx={{
                  backgroundColor: purplishBlue,
                  fontFamily: fontType,
                  color: white,
                  fontSize: 14,
                  width: "90%",
                  borderRadius: 3,
                  ":hover": { backgroundColor: purplishBlueDark },
                  ":disabled": { backgroundColor: purplishBlueLight },
                }}
                onClick={submitHandler}
                disabled={chosenAnswer === ""}
              >
                Submit
              </Button>
            </Grid>
          )}

          {/* After submission buttons webpage design */}
          {submit && (
            <Grid
              container
              display={{ xs: "none", md: "flex" }}
              justifyContent="space-between"
            >
              <Grid item md={2}>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    ":hover": { backgroundColor: purplishBlueDark },
                    ":disabled": { backgroundColor: purplishBlueLight },
                  }}
                  onClick={prevHandler}
                  disabled={currentQuestion === 0}
                >
                  Previous Question
                </Button>
              </Grid>
              <Grid item md={7}></Grid>
              <Grid item md={2} mr={6}>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    ":hover": { backgroundColor: purplishBlueDark },
                  }}
                  onClick={nextHandler}
                >
                  Next Question
                </Button>
              </Grid>
            </Grid>
          )}

          {/* After submission buttons phone design */}
          {submit && (
            <Grid container display={{ xs: "flex", md: "none" }}>
              <Button
                sx={{
                  backgroundColor: purplishBlue,
                  fontFamily: fontType,
                  color: white,
                  fontSize: 14,
                  width: "90%",
                  borderRadius: 3,
                  ":hover": { backgroundColor: purplishBlueDark },
                  ":disabled": { backgroundColor: purplishBlueLight },
                  mb: 2,
                }}
                onClick={prevHandler}
                disabled={currentQuestion === 0}
              >
                Previous Question
              </Button>
              <Button
                sx={{
                  backgroundColor: purplishBlue,
                  fontFamily: fontType,
                  color: white,
                  fontSize: 14,
                  width: "90%",
                  borderRadius: 3,
                  ":hover": { backgroundColor: purplishBlueDark },
                }}
                onClick={nextHandler}
              >
                Next Question
              </Button>
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
};
