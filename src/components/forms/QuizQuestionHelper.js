import React from "react";
import { Grid, TextField, Box, Button, Card, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  activeBorderBlueButton,
  activeRedButton,
  hoverBorderBlueButton,
  hoverRedButton,
  neural500,
  neural900,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  pressedRedButton,
  purplishBlueDark,
  purplishBluePale,
  red,
  white,
} from "../../design/color";
import LoadingButton from "@mui/lab/LoadingButton";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { fontType } from "../../design/font";

export default function QuizQuestionHelper({
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
  pending,
  imageLoading,
  imageDeleteLoading,
}) {
  
  return (
    <Box mt={3}>
      <Card>
        <Grid container spacing={3} m={1}>
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
              Answers
            </Typography>
            <FormControl sx={{ width: "95%" }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                sx={{
                  width: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  fontFamily={fontType}
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural500,
                  }}
                >
                  Answers A
                </Typography>
                <Grid container display="flex" spacing={0} mb={1}>
                  <Grid item xs={1} md={0.5} mb={2}>
                    <FormControlLabel
                      value="a"
                      onChange={(e) => setAnswer(e.target.value)}
                      control={
                        <Radio
                          sx={{
                            color: neural900,
                            "&.Mui-checked": {
                              color: neural900,
                            },
                          }}
                          checked={answer === "a"}
                        />
                      }
                    ></FormControlLabel>
                  </Grid>
                  <Grid xs={11} md={11.5} item mt={1}>
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
                      value={choice1}
                      onChange={(e) => setChoice1(e.target.value)}
                      id="choice1"
                      name="choice1"
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid item ml={5} mb={3}>
                  <input
                    accept="image/*"
                    id="contained-button-file1"
                    type="file"
                    hidden
                    onChange={handleImage1}
                  />
                  <label htmlFor="contained-button-file1">
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
                  </label>
                  {preview1 && (
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
                      onClick={handleImage1Remove}
                      loading={imageLoading || imageDeleteLoading}
                      loadingPosition="end"
                      endIcon={<DeleteOutlinedIcon />}
                    >
                      <span>Remove</span>
                    </LoadingButton>
                  )}
                </Grid>

                {preview1 && (
                  <Grid item xs={12} alignSelf="flex-start" ml={5}>
                    <img width="100px" src={preview1}></img>
                  </Grid>
                )}

                <Typography
                  variant="h3"
                  fontFamily={fontType}
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural500,
                  }}
                >
                  Answers B
                </Typography>
                <Grid container display="flex" spacing={0} mb={1}>
                  <Grid item xs={1} md={0.5} mb={2}>
                    <FormControlLabel
                      value="b"
                      onChange={(e) => setAnswer(e.target.value)}
                      control={
                        <Radio
                          sx={{
                            color: neural900,
                            "&.Mui-checked": {
                              color: neural900,
                            },
                          }}
                          checked={answer === "b"}
                        />
                      }
                    ></FormControlLabel>
                  </Grid>
                  <Grid xs={11} md={11.5} item mt={1}>
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
                      id="choice2"
                      name="choice2"
                      value={choice2}
                      onChange={(e) => setChoice2(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid item ml={5} mb={3}>
                  <input
                    accept="image/*"
                    id="contained-button-file2"
                    type="file"
                    hidden
                    onChange={handleImage2}
                  />
                  <label htmlFor="contained-button-file2">
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
                  </label>
                  {preview2 && (
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
                      onClick={handleImage2Remove}
                      loading={imageLoading || imageDeleteLoading}
                      loadingPosition="end"
                      endIcon={<DeleteOutlinedIcon />}
                    >
                      <span>Remove</span>
                    </LoadingButton>
                  )}
                </Grid>

                {preview2 && (
                  <Grid item xs={12} alignSelf="flex-start" ml={5}>
                    <img width="100px" src={preview2}></img>
                  </Grid>
                )}

                <Typography
                  variant="h3"
                  fontFamily={fontType}
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural500,
                  }}
                >
                  Answers C
                </Typography>

                <Grid container display="flex" spacing={0} mb={1}>
                  <Grid item xs={1} md={0.5} mb={2}>
                    <FormControlLabel
                      value="c"
                      onChange={(e) => setAnswer(e.target.value)}
                      control={
                        <Radio
                          sx={{
                            color: neural900,
                            "&.Mui-checked": {
                              color: neural900,
                            },
                          }}
                          checked={answer === "c"}
                        />
                      }
                    ></FormControlLabel>
                  </Grid>
                  <Grid xs={11} md={11.5} item mt={1}>
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
                      id="choice3"
                      name="choice3"
                      fullWidth
                      value={choice3}
                      onChange={(e) => setChoice3(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Grid item ml={5} mb={3}>
                  <input
                    accept="image/*"
                    id="contained-button-file3"
                    type="file"
                    hidden
                    onChange={handleImage3}
                  />
                  <label htmlFor="contained-button-file3">
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
                  </label>
                  {preview3 && (
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
                      onClick={handleImage3Remove}
                      loading={imageLoading || imageDeleteLoading}
                      loadingPosition="end"
                      endIcon={<DeleteOutlinedIcon />}
                    >
                      <span>Remove</span>
                    </LoadingButton>
                  )}
                </Grid>

                {preview3 && (
                  <Grid item xs={12} alignSelf="flex-start" ml={5}>
                    <img width="100px" src={preview3}></img>
                  </Grid>
                )}

                <Typography
                  variant="h3"
                  fontFamily={fontType}
                  sx={{
                    fontSize: 14,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural500,
                  }}
                >
                  Answers D
                </Typography>
                <Grid container display="flex" spacing={0} mb={1}>
                  <Grid item xs={1} md={0.5} mb={2}>
                    <FormControlLabel
                      value="d"
                      onChange={(e) => setAnswer(e.target.value)}
                      control={
                        <Radio
                          sx={{
                            color: neural900,
                            "&.Mui-checked": {
                              color: neural900,
                            },
                          }}
                          checked={answer === "d"}
                        />
                      }
                    ></FormControlLabel>
                  </Grid>
                  <Grid xs={11} md={11.5} item mt={1}>
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
                      id="choice4"
                      name="choice4"
                      fullWidth
                      value={choice4}
                      onChange={(e) => setChoice4(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Grid item ml={5} mb={3}>
                  <input
                    accept="image/*"
                    id="contained-button-file4"
                    type="file"
                    hidden
                    onChange={handleImage4}
                  />
                  <label htmlFor="contained-button-file4">
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
                  </label>
                  {preview4 && (
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
                      onClick={handleImage4Remove}
                      loading={imageLoading || imageDeleteLoading}
                      loadingPosition="end"
                      endIcon={<DeleteOutlinedIcon />}
                    >
                      <span>Remove</span>
                    </LoadingButton>
                  )}
                </Grid>

                {preview4 && (
                  <Grid item xs={12} alignSelf="flex-start" ml={5}>
                    <img width="100px" src={preview4}></img>
                  </Grid>
                )}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
