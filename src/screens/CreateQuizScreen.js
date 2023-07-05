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
} from "@mui/material";
import {
  neural900,
} from "../design/color";
import { QUIZ_CREATE_RESET } from "../constants/course";
import QuizForm from "../components/forms/QuizForm";

function CreateQuizScreen() {
  const [title, setTitle] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [length, setLength] = useState(1);
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const topicCreate = useSelector((state) => state.topicCreate);
  const { loading: topicLoading, success } = topicCreate;

  const navigate = useNavigate();

  const params = useParams();

  const handleAddQuestion = () => {
    setLength(i => i + 1);
  }

  // useEffect(() => {
  //   if (success) {
  //     dispatch({ type: TOPIC_CREATE_RESET });
  //     navigate(`/mycourses/${params.slug}`);
  //   }
  // }, [topicCreate]);

  // const handleImageRemove = async () => {
  //   try {
  //     const res = await axios.post("/api/course/remove-image", { image });
  //     setImage();
  //     setPreview("");
  //   } catch (error) {
  //   }
  // };

  // const handleImage = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   let file = e.target.files[0];
  //   setPreview(window.URL.createObjectURL(file));

  //   // resize image before send to s3
  //   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
  //     try {
  //       let { data } = await axios.post("/api/course/upload-image", {
  //         image: uri,
  //       });

  //       // set image in the state
  //       setImage(data);
  //       setLoading(false);
  //     } catch (error) {}
  //   });
  // };

  // const handleVideo = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setUploading(true);
  //     setProgress(0);
  //     const file = e.target.files[0];

  //     const videoData = new FormData();
  //     videoData.append("video", file);

  //     // save progress bar and send video as form data to backend
  //     const { data } = await axios.post("/api/course/video-upload", videoData, {
  //       onUploadProgress: (e) => {
  //         setProgress(Math.round((100 * e.loaded) / e.total));
  //       },
  //     });

  //     // once response is received
  //     setVideo(data);
  //     setVideoFile(file.name);
  //     setUploading(false);
  //   } catch (err) {
  //     setUploading(false);
  //   }
  // };

  // const handleVideoRemove = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setUploading(true);
  //     const { data } = await axios.post("/api/course/remove-video", { video });

  //     setVideo();
  //     setProgress(0);
  //     setUploading(false);
  //     setVideoFile("");
  //   } catch {
  //     setUploading(false);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   dispatch(createTopic(params.slug, title, video, image));
  //   setVideo();
  //   setTitle("");
  //   setImage();
  //   setPreview("");
  //   setVideoFile("");
  //   setLoading(false);
  // };

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
            Create Quiz
          </Typography>
          <QuizForm
            setTitle={setTitle}
            title={title}
            preview={preview}
            uploading={uploading}
            loading={loading}
            progress={progress}
            videoFile={videoFile}
            // handleVideo={handleVideo}
            // handleImage={handleImage}
            // handleImageRemove={handleImageRemove}
            // handleVideoRemove={handleVideoRemove}
            // handleSubmit={handleSubmit}
            handleAddQuestion={handleAddQuestion}
            quiz={quiz}
            setQuiz={setQuiz}
            video={video}
            image={image}
            length={length}
          />
        </Box>
    </Container>
  );
}

export default CreateQuizScreen;