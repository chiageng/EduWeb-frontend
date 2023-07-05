import React, {useState} from "react";
import { Typography, TextField, Grid, Card, Button } from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  red,
} from "../../design/color";
import { fontType } from "../../design/font";

function QuizFormHelper({quiz, setQuiz, position}) {
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <Grid item xs={12} pb={2}>
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Quiz Question {position + 1}
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
        required
        id="question"
        name="question"
        fullWidth
        size="small"
      />
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Choice 1
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setChoice1(e.target.value)}
        value={choice1}
        required
        id="choice1"
        name="choice1"
        fullWidth
        size="small"
      />
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Choice 2
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setChoice2(e.target.value)}
        value={choice2}
        required
        id="choice2"
        name="choice2"
        fullWidth
        size="small"
      />
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Choice 3
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setChoice3(e.target.value)}
        value={choice3}
        required
        id="choice3"
        name="choice3"
        fullWidth
        size="small"
      />
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Choice 4
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setChoice4(e.target.value)}
        value={choice4}
        required
        id="choice4"
        name="choice4"
        fullWidth
        size="small"
      />
      <Typography
        sx={{
          fontFamily: fontType,
          fontWeight: 600,
          fontSize: 16,
          color: neural500,
        }}
      >
        Answer
      </Typography>
      <TextField
        inputProps={{
          style: {
            fontSize: 14,
            backgroundColor: purplishBluePale,
            color: purplishBlueDark,
          },
        }}
        onChange={(e) => setAnswer(e.target.value)}
        value={answer}
        required
        id="answer"
        name="answer"
        fullWidth
        size="small"
      />
    </Grid>
  );
}

export default QuizFormHelper;
