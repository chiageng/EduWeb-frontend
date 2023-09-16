import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
  Container,
  Box,
  Card,
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
  purplishBluePale,
  activeBlueButton,
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
    <>
      <>
        <Card>
          <Grid container spacing={3} m={1} width="95%">
            <Grid item xs={12} mb={2}>
              <Typography
                variant="h3"
                fontFamily={fontType}
                sx={{
                  fontSize: 24,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural900,
                  mb: 2,
                }}
              >
                Question
              </Typography>

              <Typography
                variant="h3"
                fontFamily={fontType}
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontStyle: "normal",
                  color: neural500,
                  mb: 1,
                }}
              >
                Question
              </Typography>
              <TextField
                sx={{ ".MuiFilledInput-root": { p: 0 } }}
                variant="filled"
                multiline
                minRows={4}
                maxRows={4}
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: neural900,
                  },
                }}
                required
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                id="question"
                name="question"
                fullWidth
              />

              <Grid item xs={12} mt={2}>
                <label htmlFor="contained-button-file">
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    hidden
                    onChange={handleImage}
                  />

                  <LoadingButton
                    component="span"
                    loading={imageLoading || imageDeleteLoading}
                    loadingPosition="end"
                    endIcon={<ImageOutlinedIcon />}
                    variant="outlined"
                    sx={{
                      color: purplishBlueDark,
                      py: 1,
                      borderRadius: 2,
                      textTransform: "capitalize",
                      fontSize: 12,
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
                    }}
                  >
                    <span>Upload Image</span>
                  </LoadingButton>
                  {preview && (
                    <LoadingButton
                      sx={{
                        ml: 2,
                        color: neural900,
                        fontSize: 12,
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 300,
                        backgroundColor: red,
                        textTransform: "capitalize",
                        color: white,
                        ":hover": {
                          backgroundColor: hoverRedButton,
                        },
                        ":focus": { backgroundColor: pressedRedButton },
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
                <Grid item xs={12} alignSelf="flex-start" mt={1}>
                  <img width="100px" src={preview}></img>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Card>

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

        <Box mt={2}>
          <Card>
            <Grid container spacing={3} m={1} width="95%">
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  fontFamily={fontType}
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural900,
                    mb: 2,
                  }}
                >
                  Explanation
                </Typography>
                <Box width="100%" sx={{ backgroundColor: white }} mb={2}>
                  <Typography
                    variant="h3"
                    fontFamily={fontType}
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      fontStyle: "normal",
                      color: neural500,
                      mb: 1,
                    }}
                  >
                    Explanation
                  </Typography>
                  <TextField
                    sx={{ ".MuiFilledInput-root": { p: 0 } }}
                    variant="filled"
                    multiline
                    minRows={4}
                    maxRows={4}
                    inputProps={{
                      style: {
                        fontSize: 14,
                        backgroundColor: purplishBluePale,
                        color: neural900,
                      },
                    }}
                    required
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    id="explanation"
                    name="explanation"
                    fullWidth
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Button */}
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} md={2} mt={1} mb={4}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: purplishBlueDark,
                    py: 1,
                    borderRadius: 2,
                    textTransform: "capitalize",
                    fontSize: 12,
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
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    borderRadius: 2,
                    py: 1,
                    color: white,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  onClick={handleSubmit}
                >
                  {edit ? "Update Question" : "Create Question"}
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </>
    </>
  );
}

export default QuizQuestionForm;
