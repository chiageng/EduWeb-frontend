import { useState } from "react";
import { DUMMY_QUIZ, DUMMY_QUIZ as Quest } from "../Courses";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Container, Breadcrumbs, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { courses } from "../Courses";
import {
  neural300,
  neural500,
  neural700,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  orangeLight,
} from "../design/color";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import { fontType } from "../design/font";

export const MyQuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState("");
  let score = 0;
  const [submit, setSubmit] = useState(false);
  const [end, setEnd] = useState(false);
  const params = useParams();
  const course = courses.find((course) => course._id === params.id);
  const quiz = DUMMY_QUIZ;
  const selections = quiz[currentQuestion].answers;
  const mySolutions = [];

  const submitHandler = (e) => {
    mySolutions[currentQuestion] = chosenAnswer;
    if (e.target.value === quiz[currentQuestion].correctAnswer) {
      score += 1;
    }
    setSubmit(true);
    console.log(mySolutions)
  }

  const clickHandler = (e) => {
    setChosenAnswer(e.target.value);
  }

  const nextHandler = () => {
    setCurrentQuestion(prev => prev + 1);
    setChosenAnswer("");
    setSubmit(false);
  }

  const prevHandler = () => {
    setCurrentQuestion(prev => prev - 1);
    setChosenAnswer(mySolutions[currentQuestion]);
  }

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
            fontSize: 18,
            fontWeight: 400,
            fontStyle: "normal",
            color: neural900,
            mb: "8px",
          }}
        >
          Question 1 / 40
        </Typography>
        <Typography
          variant="h3"
          fontFamily={fontType}
          sx={{
            fontSize: 18,
            fontWeight: 400,
            fontStyle: "normal",
            color: neural900,
            mb: "32px",
          }}
        >
          {quiz[0].question}
        </Typography>

        {/* Before submission */}
        {!submit && <QuizQuestion
          selections={selections}
          onClick={clickHandler}
        ></QuizQuestion>}

        {/* After submission */}
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
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "right",
                  pl: 1,
                  pb: 1,
                }}
              >
                <Button
                  key="/courses"
                  href={`/videos`}
                  style={{ textAlign: "center" }}
                  sx={{
                    my: "24px",
                    display: "block",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: "140%",
                    borderRadius: 10,
                    mr: 3,
                    fontFamily: fontType,
                    backgroundColor: white,
                    color: neural900,
                    height: "40px",
                    ":hover": { backgroundColor: orangeLight },
                  }}
                >
                </Button>
              </Box>
            </Box>
          </Card>}

        {/* Before submission webpage design */}
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
              }}
              onClick={submitHandler}
            >
              Submit
            </Button>
          </Grid>
        </Grid>}

        {/* Before submission phone design */}
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
              }}
              onClick={submitHandler}
            >
              Submit
            </Button>
        </Grid>}

        {/* After submission webpage design */}
        {submit && <Grid container display={{ xs: "none", md: "flex" }} justifyContent="space-between">
          <Grid item md={2}><Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 3,
                ":hover": { backgroundColor: purplishBlueDark },
              }}
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
            >
              Next Question
            </Button>
          </Grid>
        </Grid>}

        {/* After submission phone design */}
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
                mb: 2
              }}
              onClick={submitHandler}
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
              onClick={submitHandler}
            >
              Next Question
            </Button>
        </Grid>}
      </Box>
    </Container>
  );
};
