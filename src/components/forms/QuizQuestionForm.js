import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Card,
  Button,
  FormControl,
  RadioGroup,
  CardContent,
  FormControlLabel,
  Radio,
  Container,
  Box,
} from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  neural700,
  red,
} from "../../design/color";
import { fontType } from "../../design/font";
import QuizQuestion from "../screenHelpers/QuizQuestion";
import QuizQuestionHelper from "./QuizQuestionHelper";

function QuizQuestionForm({
  question,
  setQuestion,
  handleSubmit,
  choice1,
  choice2,
  choice3,
  choice4,
  answer,
  setChoice1,
  setChoice2,
  setChoice3,
  setChoice4,
  setAnswer,
  explanation,
  setExplanation,
  handleDelete,
  handleImage,
  handleImageRemove,
  handleImage1,
  handleImage1Remove,
  handleImage2,
  handleImage2Remove,
  handleImage3,
  handleImage3Remove,
  handleImage4,
  handleImage4Remove,
  preview1,
  preview2, 
  preview3,
  preview4,
  preview,
  pending,
}) {
  const clickHandler = () => {};

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
          1.1 First quiz of the chapter
        </Typography>

        <Grid item xs={12}>
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              hidden
              onChange={handleImage}
            />
            <Button variant="contained" component="span">
              {pending ? "Uploading..." : "Upload Image"}
            </Button>
            {preview && (
              <Button
                sx={{
                  ml: 2,
                  color: neural900,
                  fontSize: 14,
                  fontWeight: 300,
                  backgroundColor: red,
                  color: white,
                  ":hover": {
                    backgroundColor: red,
                  },
                }}
                onClick={handleImageRemove}
              >
                Remove
              </Button>
            )}
          </label>
        </Grid>

        {preview && (
          <Grid item xs={12} alignSelf="flex-start">
            <img width="100px" src={preview}></img>
          </Grid>
        )}

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
          Question
        </Typography>
        <Box width="90%" sx={{ backgroundColor: white }} mb={2}>
          <TextField
            inputProps={{
              style: {
                fontSize: 14,
                backgroundColor: white,
                color: neural900,
              },
            }}
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            id="question"
            name="question"
            fullWidth
            multiline
            maxRows={4}
          />
        </Box>

        <QuizQuestionHelper
          choice1={choice1}
          choice2={choice2}
          choice3={choice3}
          choice4={choice4}
          setChoice1={setChoice1}
          setChoice2={setChoice2}
          setChoice3={setChoice3}
          setChoice4={setChoice4}
          handleImage1={handleImage1}
          handleImage1Remove={handleImage1Remove}
          handleImage2={handleImage2}
          handleImage2Remove={handleImage2Remove}
          handleImage3={handleImage3}
          handleImage3Remove={handleImage3Remove}
          handleImage4={handleImage4}
          handleImage4Remove={handleImage4Remove}
          preview1={preview1}
          preview2={preview2}
          preview3={preview3}
          preview4={preview4}
          answer={answer}
          setAnswer={setAnswer}
          pending={pending}
        ></QuizQuestionHelper>

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
          Explanation
        </Typography>
        <Box width="90%" sx={{ backgroundColor: white }} mb={2}>
          <TextField
            inputProps={{
              style: {
                fontSize: 14,
                backgroundColor: white,
                color: neural900,
              },
            }}
            required
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            id="explanation"
            name="explanation"
            fullWidth
            multiline
            maxRows={4}
          />
        </Box>

        {/* Button for webpage */}
        <Grid
          container
          display={{ xs: "none", md: "flex" }}
          justifyContent="space-between"
        >
          <Grid item></Grid>
          <Grid item mr={6}>
            <Grid container>
              <Grid item mr={2} mb={2}>
                <Button
                  sx={{
                    backgroundColor: red,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    p: 1,
                    ":hover": { backgroundColor: red },
                  }}
                  onClick={handleDelete}
                >
                  Delete Question
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    color: white,
                    fontSize: 14,
                    borderRadius: 3,
                    p: 1,
                    ":hover": { backgroundColor: purplishBlueDark },
                  }}
                  onClick={handleSubmit}
                >
                  Save Question
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Button for phone */}
        <Grid container display={{ xs: "flex", md: "none" }}>
          <Grid item mr={1}>
            <Button
              sx={{
                backgroundColor: red,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 3,
                p: 1,
                ":hover": { backgroundColor: red },
              }}
              onClick={handleDelete}
            >
              Delete Question
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 3,
                p: 1,
                ":hover": { backgroundColor: purplishBlueDark },
              }}
              onClick={handleSubmit}
            >
              Save Question
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default QuizQuestionForm;
