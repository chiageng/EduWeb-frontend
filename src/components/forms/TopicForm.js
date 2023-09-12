import React from "react";
import { Typography, TextField, Grid, Card, Button, Box } from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  red,
  activeRedButton,
  pressedRedButton,
  hoverRedButton,
  activeBlueButton,
  hoverBlueButton,
  pressedBlueButton,
  pressedBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  hoverBorderBlueButton,
  activeBorderBlueButton,
} from "../../design/color";
import { fontType } from "../../design/font";
import Progress from "../universal/Progress";
import LoadingButton from "@mui/lab/LoadingButton";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Loader from "../universal/Loader";

function TopicForm({
  setTitle,
  title,
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
  imageLoading,
  imageDeleteLoading,
  videoLoading,
  videoDeleteLoading,
  update,
  handleCancel,
}) {
  const pending = !video || !image;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={3} m={1} width="95%">
            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Topic Title*
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

            <Grid item xs={12} mt={-2}>
              <label htmlFor="contained-button-image">
                <Grid container display="flex">
                  <Grid item mt={1}>
                    <input
                      accept="image/*"
                      id="contained-button-image"
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
                      sx={{
                        backgroundColor: activeBlueButton,
                        fontFamily: fontType,
                        fontWeight: 400,
                        fontSize: 12,
                        borderRadius: 2,
                        width: "150px",
                        py: 1,
                        textTransform: "capitalize",
                        ":hover": { backgroundColor: hoverBlueButton },
                        ":focus": { backgroundColor: pressedBlueButton },
                      }}
                    >
                      <span>Upload Image</span>
                    </LoadingButton>
                  </Grid>
                  <Grid item xs={false} sm={0.25}>
                  </Grid>

                  <Grid item mt={1}>
                    {preview && (
                      <LoadingButton
                        sx={{
                          color: neural900,
                          fontSize: 12,
                          px: 4,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 300,
                          width: "180px",
                          backgroundColor: red,
                          textTransform: "capitalize",
                          color: white,
                          ":hover": {
                            backgroundColor: hoverRedButton,
                          },
                          ":focus": { backgroundColor: pressedRedButton },
                        }}
                        endIcon={<DeleteOutlinedIcon />}
                        onClick={handleImageRemove}
                        loading={imageLoading || imageDeleteLoading}
                        loadingPosition="end"
                      >
                        Remove Image
                      </LoadingButton>
                    )}
                  </Grid>
                </Grid>
              </label>
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="contained-button-video">
                <Grid container display="flex">
                  <Grid item mt={1}>
                    <input
                      accept="video/*"
                      id="contained-button-video"
                      type="file"
                      hidden
                      onChange={handleVideo}
                      disabled={uploading}
                    />
                    <LoadingButton
                      variant="contained"
                      component="span"
                      loading={videoLoading || videoDeleteLoading}
                      loadingPosition="end"
                      endIcon={<OndemandVideoOutlinedIcon />}
                      sx={{
                        backgroundColor: activeBlueButton,
                        fontFamily: fontType,
                        fontWeight: 400,
                        fontSize: 12,
                        width: "150px",
                        borderRadius: 2,
                        py: 1,
                        textTransform: "capitalize",
                        ":hover": { backgroundColor: hoverBlueButton },
                        ":focus": { backgroundColor: pressedBlueButton },
                      }}
                    >
                      <span>Upload Video</span>
                    </LoadingButton>
                  </Grid>

                  <Grid item xs={false} sm={0.25}>
                  </Grid>

                  <Grid item mt={1}>
                    {videoFile && (
                      <LoadingButton
                        sx={{
                          color: neural900,
                          fontSize: 12,
                          px: 4,
                          py: 1,
                          borderRadius: 2,
                          fontWeight: 300,
                          width: "180px",
                          backgroundColor: red,
                          textTransform: "capitalize",
                          color: white,
                          ":hover": {
                            backgroundColor: hoverRedButton,
                          },
                          ":focus": { backgroundColor: pressedRedButton },
                        }}
                        onClick={handleVideoRemove}
                        loading={videoLoading || videoDeleteLoading}
                        loadingPosition="end"
                        endIcon={<DeleteOutlinedIcon />}
                      >
                        Remove Video
                      </LoadingButton>
                    )}
                  </Grid>
                </Grid>

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

            {/* Button */}
            <Grid container justifyContent="center" display="flex" pb={4}>
              <Grid item xs={12} sm={2} mt={1.5}>
                <Button
                  variant="outlined"
                  fullWidth
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
              <Grid item sm={0.25} xs={false} mt={1}></Grid>
              <Grid item xs={12} sm={2} mt={1.5}>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    borderRadius: 2,
                    py: 1,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                >
                  {update ? "Update Topic" : "Create Topic"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TopicForm;
