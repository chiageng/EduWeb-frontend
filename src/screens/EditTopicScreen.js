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
import { editTopic, viewTopic } from "../actions/courseActions";
import { TOPIC_EDIT_RESET, TOPIC_VIEW_RESET } from "../constants/course";
import Loader from "../components/universal/Loader";
import TopicForm from "../components/forms/TopicForm";
import { deleteImage, deleteVideo, uploadImage, uploadVideo } from "../actions/uploadActions";

function EditTopicScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [preview, setPreview] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const topicView = useSelector(state => state.topicView);
  const { loading, topic } = topicView;

  const topicEdit = useSelector(state => state.topicEdit)
  const {loading: editLoading, success} = topicEdit

  const imageUpload = useSelector(state => state.imageUpload);
  const { loading: imageLoading, image:data, error:imageError} = imageUpload;

  const imageDelete = useSelector(state => state.imageDelete);
  const {loading: imageDeleteLoading, success:deleteImageSuccess, error: deleteImageError} = imageDelete;

  const videoUpload = useSelector(state => state.videoUpload);
  const { loading: videoLoading, video:videoData, error:videoError} = videoUpload;

  const videoDelete = useSelector(state => state.videoDelete);
  const {loading: videoDeleteLoading, success:deleteVideoSuccess, error: deleteVideoError} = videoDelete;

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (success) {
      dispatch({ type: TOPIC_EDIT_RESET });
      dispatch({ type: TOPIC_VIEW_RESET });
      navigate(`/mycourses/${params.slug}`);
    }
    if (!topic) {
      dispatch(viewTopic({slug: params.slug, lesson_id: params.topic_id}))
    }
    if (topic) {
      setTitle(topic.title)
      setImage(topic.image)
      setVideo(topic.video)
      setPreview(topic.image && topic.image.Location)
      setVideoFile(topic.video && topic.video.ETag)
    }
  }, [topicEdit, topic]);

  // const handleImageRemove = async () => {
  //   try {
  //     const res = await axios.post("/api/course/remove-image", { image });
  //     setImage();
  //     setPreview("");
  //   } catch (error) {
  //     console.log("Error when delete image");
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
  //     console.log(err);
  //     setUploading(false);
  //   }
  // };

  // const handleVideoRemove = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setUploading(true);
  //     console.log(video);
  //     const { data } = await axios.post("/api/course/remove-video", { video });

  //     setVideo();
  //     setProgress(0);
  //     setUploading(false);
  //     setVideoFile("");
  //   } catch {
  //     setUploading(false);
  //   }
  // };

  const handleImageRemove = () => {
    dispatch(deleteImage(image, setPreview, setImage));
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview, setImage));
  };

  const handleVideo = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    dispatch(uploadVideo(file, setProgress, setVideo, setVideoFile, setUploading));
  }

  const handleVideoRemove = (e) => {
    e.preventDefault();
    dispatch(deleteVideo(video, setProgress, setVideo, setVideoFile, setUploading))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editTopic({slug: params.slug, lesson_id: params.topic_id, title, video, image}));
    setVideo();
    setTitle("");
    setImage();
    setPreview("");
    setVideoFile("");
  };

  return (
    <Container>
      {(loading || editLoading) && <Loader />}
      {(!loading && !editLoading) && (
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
            Edit Topic
          </Typography>
          <TopicForm
            setTitle={setTitle}
            title={title}
            preview={preview}
            handleImage={handleImage}
            handleImageRemove={handleImageRemove}
            handleVideo={handleVideo}
            uploading={uploading}
            loading={loading}
            progress={progress}
            videoFile={videoFile}
            handleVideoRemove={handleVideoRemove}
            handleSubmit={handleSubmit}
            image={image}
            video={video}
            videoLoading={videoLoading}
            videoDeleteLoading={videoDeleteLoading}
            imageLoading={imageLoading}
            imageDeleteLoading={imageDeleteLoading}
          />
        </Box>
      )}
    </Container>
  );
}

export default EditTopicScreen;
