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
import { createCourse, editCourse } from "../../actions/courseActions";
import { useNavigate, useParams } from "react-router-dom";
import { viewCourse } from "../../actions/courseActions";
import { CourseForm } from "../../components/forms/CourseForm";
import { COURSES_VIEW_RESET, COURSE_EDIT_RESET } from "../../constants/course";
import { deleteImage, uploadImage } from "../../actions/uploadActions";
import { Div } from "../../navbar/AdminAppBar";
import { Message } from "@mui/icons-material";
import Loader from "../../components/universal/Loader";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function EditCourseScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();
  const params = useParams();

  const courseEdit = useSelector((state) => state.courseEdit);
  const { success, error } = courseEdit;

  const imageUpload = useSelector((state) => state.imageUpload);
  const { loading: imageLoading, image: data, error: imageError } = imageUpload;

  const imageDelete = useSelector((state) => state.imageDelete);
  const {
    loading: imageDeleteLoading,
    success: deleteImageSuccess,
    error: deleteImageError,
  } = imageDelete;

  const courseView = useSelector((state) => state.courseView);
  const { loading, course: courseExist, error: viewError } = courseView;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      dispatch({ type: COURSE_EDIT_RESET });
      dispatch({ type: COURSES_VIEW_RESET })
      navigate(`/admin/courses/`);
    }
    if (!courseExist || courseExist.slug !== params.slug) {
      dispatch(viewCourse(params.slug));
    }
    if (courseExist) {
      setTitle(courseExist.title);
      setImage(courseExist.image);
      setDescription(courseExist.description);
      setLevel(courseExist.level);
      setCategory(courseExist.category);
      setPreview(courseExist.image && courseExist.image.Location);
    }
  }, [courseEdit, params, courseExist, open]);

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
    dispatch(editCourse({ slug: params.slug, title, description, level, category, image }));
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
        key="Home"
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
        key="Courses"
        color={neural500}
      >
        Courses
      </Typography>
      <Typography
        as={Link}
        to="/admin"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="Title"
        color={neural500}
      >
        {courseExist && courseExist.title}
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Edit Course
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
                mb: "16px",
              }}
            >
              Edit Course
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
              update={true}
            />
          </Div>
        </>
      )}
    </>
  );
}

export default EditCourseScreen;
