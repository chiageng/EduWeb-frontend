import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Card,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  red,
} from "../design/color";
import { fontType } from "../design/font";
import Progress from "../components/Progress";
import { createTopic } from "../actions/courseActions";

function CreateTopicScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin

  const topicCreate = useSelector(state => state.topicCreate)
  const { success } = topicCreate;

  const navigate = useNavigate();

  const params = useParams()


  useEffect(() => {
    if (success) {
      navigate(`/mycourses/${params.slug}`)
    }
  }, [topicCreate]);

  const handleImageRemove = async () => {
    try {
      const res = await axios.post("/api/course/remove-image", { image });
      setImage();
      setPreview("");
    } catch (error) {
      console.log("Error when delete image");
    }
  };

  const handleImage = (e) => {
    setLoading(true);
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));

    // resize image before send to s3
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });

        // set image in the state
        setImage(data);
        setLoading(false);
      } catch (error) {}
    });
  };

  const handleVideo = async (e) => {
    try {
      setUploading(true)
      setProgress(0)
      const file = e.target.files[0];
      
      const videoData = new FormData();
      videoData.append('video', file)
      
      // save progress bar and send video as form data to backend
      const { data } = await axios.post('/api/course/video-upload', videoData, {
        onUploadProgress: (e) => {
          setProgress(Math.round((100 * e.loaded) / e.total))
        }
      })
      
      // once response is received
      setVideo(data);
      setVideoFile(file.name);
      setUploading(false)

    } catch (err) {
      console.log(err)
      setUploading(false)
    }
  };

  const handleVideoRemove = async (e) => {
    try {
      setUploading(true)
      console.log(video)
      const { data } = await axios.post("/api/course/remove-video", {video});

      setVideo();
      setProgress(0);
      setUploading(false);
      setVideoFile("");
    } catch {
      setUploading(false)
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTopic(params.slug, title, video, image))
    setVideo();
    setTitle("");
    setImage();
    setPreview("")
    setVideoFile("")
  };

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
          Create Topic
        </Typography>
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
                    Topic Title
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
                    {uploading && <Progress progress={progress}/>}
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
                    }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CreateTopicScreen;
