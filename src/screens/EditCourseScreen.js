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
import React, { useEffect, useState } from "react";
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
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, editCourse } from "../actions/courseActions";
import { useNavigate, useParams } from "react-router-dom";
import { viewCourse } from "../actions/courseActions";
import { CourseForm } from "../components/CourseForm";

function EditCourseScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const params = useParams();
  
  const courseEdit = useSelector(state => state.courseEdit);
  const { success } = courseEdit;

  const courseView = useSelector((state) => state.courseView);
  const {
    loading: viewLoading,
    course: courseExist,
    error: viewError,
  } = courseView;

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate(`/mycourses/${params.slug}`);
    }
    if (!courseExist) {
      dispatch(viewCourse(params.slug));
    }
    if (courseExist) {
      setTitle(courseExist.title);
      setPrice(courseExist.price);
      setImage(courseExist.image);
      setPreview(courseExist.image.Location);
    }
  }, [courseEdit, params, courseExist]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(editCourse({ slug: params.slug, title, price, image }));
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
          Edit Course
        </Typography>
        <CourseForm
          title={title}
          price={price}
          setTitle={setTitle}
          setPrice={setPrice}
          preview={preview}
          handleImage={handleImage}
          handleImageRemove={handleImageRemove}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </Box>
    </Container>
  );
}

export default EditCourseScreen;