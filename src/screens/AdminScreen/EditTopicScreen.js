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
  Breadcrumbs,
} from "@mui/material";
import {
  neural900, neural500, white,
} from "../../design/color";
import { editTopic, viewTopic } from "../../actions/courseActions";
import { TOPIC_EDIT_RESET, TOPIC_VIEW_RESET } from "../../constants/course";
import Loader from "../../components/universal/Loader";
import TopicForm from "../../components/forms/TopicForm";
import { deleteImage, deleteVideo, uploadImage, uploadVideo } from "../../actions/uploadActions";
import { Div } from "../../navbar/AdminAppBar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import unslugify from "unslugify"
import Message from "../../components/universal/Message";

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
  const {loading: editLoading, success, error} = topicEdit

  const imageUpload = useSelector(state => state.imageUpload);
  const { loading: imageLoading, image:data, error:imageError} = imageUpload;

  const imageDelete = useSelector(state => state.imageDelete);
  const {loading: imageDeleteLoading, success:deleteImageSuccess, error: deleteImageError} = imageDelete;

  const videoUpload = useSelector(state => state.videoUpload);
  const { loading: videoLoading, video:videoData, error:videoError} = videoUpload;

  const videoDelete = useSelector(state => state.videoDelete);
  const {loading: videoDeleteLoading, success:deleteVideoSuccess, error: deleteVideoError} = videoDelete;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    if (success) {
      dispatch({ type: TOPIC_EDIT_RESET });
      dispatch({ type: TOPIC_VIEW_RESET });
      navigate(`/admin/courses/${params.slug}`);
    }
    if (!topic || topic._id != params.topic_id) {
      dispatch(viewTopic({slug: params.slug, lesson_id: params.topic_id}))
    }
    if (topic) {
      setTitle(topic.title)
      setImage(topic.image)
      setVideo(topic.video)
      setPreview(topic.image && topic.image.Location)
      setVideoFile(topic.video && topic.video.ETag)
    }
  }, [topicEdit, topic, open]);

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

  const handleCancel = () => {
    navigate(`/admin/courses/${params.slug}`)
  }

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/admin"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Home
      </Typography>
      <Typography
        as={Link}
        to="/admin/courses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Courses
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${params.slug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {unslugify(params.slug)}
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Update Topic
      </Typography>
    </Breadcrumbs>
  );

  return (
    <>
      {loading && <Div><Loader /></Div>}
      {!loading && error && <Message type="error">{error}</Message>}
      {!loading && (
        <>
        <Div style ={{ backgroundColor: white}}>
          {breadcrumb}
          <Typography
            variant="h3"
            fontFamily="Poppins"
            sx={{
              fontSize: 32,
              fontWeight: 600,
              fontStyle: "normal",
              color: neural900,
            }}
          >
            Update Topic
          </Typography>
          </Div>

          <Div>
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
            video={video}
            image={image}
            imageLoading={imageLoading}
            imageDeleteLoading={imageDeleteLoading}
            videoLoading={videoLoading}
            videoDeleteLoading={videoDeleteLoading}
            handleCancel={handleCancel}
            update={true}
          />
          </Div>
        </>
      )}
    </>
  );
}

export default EditTopicScreen;
