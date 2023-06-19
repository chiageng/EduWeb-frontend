import { useEffect, useState } from "react";
import { DUMMY_QUIZ, DUMMY_QUIZ as Quest } from "../Courses";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container, Breadcrumbs, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { courses } from "../Courses";
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
import QuizQuestion from "../components/QuizQuestion";
import { fontType } from "../design/font";
import SimpleBackdrop from "../components/SimpleBackdrop";

export const MyQuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [score, setScore] = useState(0)
  const [submit, setSubmit] = useState(false);
  const [end, setEnd] = useState(false);
  const params = useParams();
  const course = courses.find((course) => course._id === params.id);
  const quiz = DUMMY_QUIZ;
  const selections = quiz[currentQuestion].answers;

  

  const submitHandler = (e) => {
    if (quiz[currentQuestion].mySolution === '') {
      quiz[currentQuestion].mySolution = chosenAnswer;
      if (chosenAnswer === quiz[currentQuestion].correctAnswer) {
        setScore(prev => prev + 1);
      }
    }
    setSubmit(true);
  }

  const clickHandler = (e) => {
    setChosenAnswer(e.target.value);
  }

  const nextHandler = () => {
    if (currentQuestion + 1 === quiz.length) {
      setEnd(true);
      
    } else {
      setCurrentQuestion(prev => prev + 1);
      setChosenAnswer("");
      setSubmit(false);
    }
  }

  const prevHandler = () => {
    setCurrentQuestion(prev => prev - 1);
    setSubmit(true);
  }

  useEffect(() => {
    if (quiz[currentQuestion].mySolution !== '') {
      setChosenAnswer(quiz[currentQuestion].mySolution);
      setSubmit(true);
    }
  }, [submitHandler, nextHandler, prevHandler])

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

  return (
    <Container>
      {end &&  <SimpleBackdrop end={end} result={score} totalQuestions={quiz.length} onClick={() => setEnd(false)}/>}
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
          1.1 First quiz of the chapter
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
          Question {currentQuestion + 1} / {quiz.length}
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
          {quiz[currentQuestion].question}
        </Typography>

        {/* Before submission Design for Quiz Question*/}
        {!submit && <QuizQuestion
          selections={selections}
          onClick={clickHandler}
        ></QuizQuestion>}

        {/* After submission Design for Quiz Question*/}
        {submit && <QuizQuestion
          selections={selections}
          onClick={clickHandler}
          chosenAnswer={chosenAnswer}
          correctAnswer={quiz[currentQuestion].correctAnswer}
        ></QuizQuestion>}
        
        {/* After submission show explanation */}
        {submit && <Card
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
                  Answer : {quiz[currentQuestion].correctAnswer}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={neural500}
                  fontSize="16px"
                  fontFamily={fontType}
                  component="div"
                >
                  {quiz[currentQuestion].explanation}
                </Typography>
              </CardContent>
            </Box>
          </Card>}

        {/* Before submission submit button webpage design */}
        {!submit && <Grid container display={{ xs: "none", md: "flex" }}>
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
                ':disabled': {backgroundColor: purplishBlueLight},
              }}
              onClick={submitHandler}
              disabled={chosenAnswer === ''}
            >
              Submit
            </Button>
          </Grid>
        </Grid>}

        {/* Before submission submit button phone design */}
       {!submit && <Grid container display={{xs: "flex", md: "none"}}>
        <Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                width: '90%',
                borderRadius: 3,
                ":hover": { backgroundColor: purplishBlueDark },
                ':disabled': {backgroundColor: purplishBlueLight}
              }}
              onClick={submitHandler}
              disabled={chosenAnswer === ''}
            >
              Submit
            </Button>
        </Grid>}

        {/* After submission buttons webpage design */}
        {submit && <Grid container display={{ xs: "none", md: "flex" }} justifyContent="space-between">
          <Grid item md={2}><Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 3,
                ":hover": { backgroundColor: purplishBlueDark },
                ':disabled': {backgroundColor: purplishBlueLight}
              }}
              onClick={prevHandler}
              disabled={currentQuestion === 0}
            >
              Previous Question
            </Button></Grid>
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
        </Grid>}

        {/* After submission buttons phone design */}
        {submit && <Grid container display={{xs: "flex", md: "none"}}>
        <Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                width: '90%',
                borderRadius: 3,
                ":hover": { backgroundColor: purplishBlueDark },
                ':disabled': {backgroundColor: purplishBlueLight},
                mb: 2
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
                width: '90%',
                borderRadius: 3,
                ":hover": { backgroundColor: purplishBlueDark },
              }}
              onClick={nextHandler}
            >
              Next Question
            </Button>
        </Grid>}
      </Box>
    </Container>
  );
};
