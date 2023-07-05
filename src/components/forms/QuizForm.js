import React from "react";
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
import Progress from "../universal/Progress";
import QuizFormHelper from "./QuizFormHelper";
function QuizForm({
  setTitle,
  title,
  quiz,
  setQuiz,
  preview,
  handleImage,
  handleImageRemove,
  handleVideo,
  uploading,
  loading,
  progress,
  videoFile,
  handleVideoRemove,
  handleSubmit,
  video,
  image,
  length,
}) {
  const pending = !video || !image;

  return (
    <Grid container>
      <Grid item xs={0} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Grid container spacing={3} m={1} width="90%">
            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 16,
                  color: neural500,
                }}
              >
                Quiz Title
              </Typography>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                  },
                }}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                id="TopicTitle"
                name="topicTitle"
                fullWidth
                size="small"
              />
            </Grid>

            {preview && (
              <Grid item xs={12} alignSelf="flex-start">
                <img width="100px" src={preview}></img>
              </Grid>
            )}

            <Grid item xs={12}>
              <label htmlFor="contained-button-image">
                <input
                  accept="image/*"
                  id="contained-button-image"
                  type="file"
                  hidden
                  onChange={handleImage}
                />
                <Button variant="contained" component="span">
                  {loading ? "Uploading..." : "Upload Image"}
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
                    Remove Image
                  </Button>
                )}
              </label>
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="contained-button-video">
                <input
                  accept="video/*"
                  id="contained-button-video"
                  type="file"
                  hidden
                  onChange={handleVideo}
                  disabled={uploading}
                />
                <Button variant="contained" component="span">
                  {uploading ? "Uploading" : "Upload Video"}
                </Button>
                {videoFile && (
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
                    onClick={handleVideoRemove}
                  >
                    Remove Video
                  </Button>
                )}
                {uploading && <Progress progress={progress} />}
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    ml: 1,
                    mt: 1,
                    color: neural900,
                  }}
                >
                  {videoFile}
                </Typography>
              </label>
            </Grid>

            <Grid item xs={8} sm={10}></Grid>
            <Grid item xs={4} sm={2} pb={2}>
              <Button
                sx={{
                  mr: 2,
                  color: neural900,
                  display: "block",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "140%",
                  backgroundColor: purplishBlue,
                  color: white,
                  ":hover": {
                    backgroundColor: purplishBlueDark,
                  },
                  ":disabled": {
                    backgroundColor: neural500,
                    color: white,
                  }
                  
                }}
                onClick={handleSubmit}
                disabled={pending}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default QuizForm;
