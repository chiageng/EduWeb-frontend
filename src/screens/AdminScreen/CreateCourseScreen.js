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
  Breadcrumbs,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../actions/courseActions";
import { Link, useNavigate } from "react-router-dom";
import { CourseForm } from "../../components/forms/CourseForm";
import {
  COURSES_VIEW_RESET,
  COURSE_CREATE_RESET,
  TOPIC_CREATE_RESET,
} from "../../constants/course";
import Message from "../../components/universal/Message";
import { deleteImage, uploadImage } from "../../actions/uploadActions";
import Loader from "../../components/universal/Loader";
import { Div } from "../../navbar/AdminAppBar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function CreateCourseScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();
  const courseCreate = useSelector((state) => state.courseCreate);
  const { loading, success, error } = courseCreate;
  const navigate = useNavigate();

  const imageUpload = useSelector((state) => state.imageUpload);
  const { loading: imageLoading, image: data, error: imageError } = imageUpload;

  const imageDelete = useSelector((state) => state.imageDelete);
  const {
    loading: imageDeleteLoading,
    success: deleteImageSuccess,
    error: deleteImageError,
  } = imageDelete;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  useEffect(() => {
    if (success) {
      dispatch({ type: COURSES_VIEW_RESET });
      dispatch({ type: COURSE_CREATE_RESET });
      navigate("/admin/courses");
    }
  }, [courseCreate]);

  const handleImageRemove = () => {
    dispatch(deleteImage(image, setPreview, setImage));
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview, setImage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse({ title, description, level, category, image }));
  };

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
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Create Course
      </Typography>
    </Breadcrumbs>
  );

  return (
    <>
      {(error || loading) && (
        <Div>
          {error && <Message type="error">{error}</Message>}
          {loading && <Loader />}
        </Div>
      )}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
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
              Create Course
            </Typography>
          </Div>
          <Div>
            <CourseForm
              title={title}
              setTitle={setTitle}
              preview={preview}
              handleImage={handleImage}
              handleImageRemove={handleImageRemove}
              handleSubmit={handleSubmit}
              loading={loading}
              imageLoading={imageLoading}
              imageDeleteLoading={imageDeleteLoading}
              level={level}
              setLevel={setLevel}
              category={category}
              setCategory={setCategory}
              description={description}
              setDescription={setDescription}
            />
          </Div>
        </>
      )}
    </>
  );
}

export default CreateCourseScreen;
