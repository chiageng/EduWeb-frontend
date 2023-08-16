import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  Container,
  Box,
} from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBlue,
  red,
  hoverRedButton,
  activeRedButton,
  pressedRedButton,
  hoverBlueButton,
  pressedBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  activeBorderBlueButton,
  disabledButton,
  disabledButtonText,
} from "../../design/color";
import { fontType } from "../../design/font";
import QuizQuestionHelper from "./QuizQuestionHelper";
import LoadingButton from "@mui/lab/LoadingButton";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

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
  imageLoading,
  imageDeleteLoading,
  handleCancel,
  edit,
}) {
  const clickHandler = () => {};

  return (
    <Container>
      <Box pt={1} pb={10}>

        {edit && <Grid container>
          <Grid item xs={12} md={2} my={2}>
            <Button
              fullWidth
              sx={{
                backgroundColor: activeRedButton,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 3,
                p: 1,
                ":hover": { backgroundColor: hoverRedButton },
                ":active": { backgroundColor: pressedRedButton },
              }}
              onClick={handleDelete}
            >
              Delete Question
            </Button>
          </Grid>
        </Grid>}

        <Grid item xs={12}>
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              hidden
              onChange={handleImage}
            />

            <LoadingButton
              variant="contained"
              component="span"
              loading={imageLoading || imageDeleteLoading}
              loadingPosition="end"
              endIcon={<ImageOutlinedIcon />}
            >
              <span>Upload Image</span>
            </LoadingButton>
            {preview && (
              <LoadingButton
                sx={{
                  ml: 2,
                  color: neural900,
                  fontSize: 14,
                  fontWeight: 300,
                  backgroundColor: activeRedButton,
                  color: white,
                  ":hover": {
                    backgroundColor: hoverRedButton,
                  },
                  ":focus": {
                    backgroundColor: pressedRedButton,
                  },
                }}
                onClick={handleImageRemove}
                loading={imageLoading || imageDeleteLoading}
                loadingPosition="end"
                endIcon={<DeleteOutlinedIcon />}
              >
                <span>Remove</span>
              </LoadingButton>
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
        <Box width="100%" sx={{ backgroundColor: white }} mb={2}>
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
          imageLoading={imageLoading}
          imageDeleteLoading={imageDeleteLoading}
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
        <Box width="100%" sx={{ backgroundColor: white }} mb={2}>
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

        {/* Button */}
        <Grid container display="flex" justifyContent="center">
          <Grid item xs={12} md={2} mt={1}>
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
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={false} md={0.25}></Grid>
          <Grid item xs={12} md={2} mt={1}>
            <Button
              fullWidth
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                borderRadius: 2,
                py: 1.5,
                ":hover": { backgroundColor: hoverBlueButton },
                ":focus": { backgroundColor: pressedBlueButton },
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
