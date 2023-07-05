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
import { createCourse } from "../actions/courseActions";
import { useNavigate } from "react-router-dom";
import { CourseForm } from "../components/forms/CourseForm";
import { COURSES_VIEW_RESET, TOPIC_CREATE_RESET } from "../constants/course";

function CreateCourseScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const courseCreate = useSelector(state => state.courseCreate);
  const { loading:createLoading, success, error } = courseCreate;
  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      dispatch({type: COURSES_VIEW_RESET})
      navigate('/mycourses')
    }
  }, [courseCreate])

  const handleImageRemove = async () => {
    try {
      const res = await axios.post('/api/course/remove-image', {image});
      setImage();
      setPreview("");
    } catch (error) {
      console.log("Error when delete image")
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
    dispatch(createCourse({title, price, image}))
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
          Create Course
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

export default CreateCourseScreen;
