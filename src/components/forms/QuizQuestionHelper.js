import React from "react";
import { Grid, TextField, Box, Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { activeRedButton, hoverRedButton, neural900, pressedRedButton, red, white } from "../../design/color";
import LoadingButton from "@mui/lab/LoadingButton";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

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
    <Box>
      {/* Quiz question before submission for Webpage */}
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          sx={{
            width: "100%",
          }}
        >
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
            <Grid xs={11} md={11.5} item>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: white,
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
            <label htmlFor="contained-button-file1">
              <input
                accept="image/*"
                id="contained-button-file1"
                type="file"
                hidden
                onChange={handleImage1}
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
              {preview1 && (
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
                onClick={handleImage1Remove}
                loading={imageLoading || imageDeleteLoading}
                loadingPosition="end"
                endIcon={<DeleteOutlinedIcon />}
              >
                <span>Remove</span>
              </LoadingButton>
              )}
            </label>
          </Grid>

          {preview1 && (
            <Grid item xs={12} alignSelf="flex-start" ml={5}>
              <img width="100px" src={preview1}></img>
            </Grid>
          )}

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
            <Grid xs={11} md={11.5} item>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: white,
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
            <label htmlFor="contained-button-file2">
              <input
                accept="image/*"
                id="contained-button-file2"
                type="file"
                hidden
                onChange={handleImage2}
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
              {preview2 && (
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
                onClick={handleImage2Remove}
                loading={imageLoading || imageDeleteLoading}
                loadingPosition="end"
                endIcon={<DeleteOutlinedIcon />}
              >
                <span>Remove</span>
              </LoadingButton>
              )}
            </label>
          </Grid>

          {preview2 && (
            <Grid item xs={12} alignSelf="flex-start" ml={5}>
              <img width="100px" src={preview2}></img>
            </Grid>
          )}

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
            <Grid xs={11} md={11.5} item>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: white,
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
            <label htmlFor="contained-button-file3">
              <input
                accept="image/*"
                id="contained-button-file3"
                type="file"
                hidden
                onChange={handleImage3}
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
              {preview3 && (
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
                onClick={handleImage3Remove}
                loading={imageLoading || imageDeleteLoading}
                loadingPosition="end"
                endIcon={<DeleteOutlinedIcon />}
              >
                <span>Remove</span>
              </LoadingButton>
              )}
            </label>
          </Grid>

          {preview3 && (
            <Grid item xs={12} alignSelf="flex-start" ml={5}>
              <img width="100px" src={preview3}></img>
            </Grid>
          )}

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
            <Grid xs={11} md={11.5} item>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: white,
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
            <label htmlFor="contained-button-file4">
              <input
                accept="image/*"
                id="contained-button-file4"
                type="file"
                hidden
                onChange={handleImage4}
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
              {preview4 && (
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
                onClick={handleImage4Remove}
                loading={imageLoading || imageDeleteLoading}
                loadingPosition="end"
                endIcon={<DeleteOutlinedIcon />}
              >
                <span>Remove</span>
              </LoadingButton>
              )}
            </label>
          </Grid>

          {preview4 && (
            <Grid item xs={12} alignSelf="flex-start" ml={5}>
              <img width="100px" src={preview4}></img>
            </Grid>
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
