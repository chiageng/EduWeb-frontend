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
import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { createCourse } from "../actions/courseActions";

function CreateCourseScreen() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [price, setPrice] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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
                    Course Title
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
                    id="CourseTitle"
                    name="courseTitle"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} pb={2}>
                  <Typography
                    sx={{
                      fontFamily: fontType,
                      fontWeight: 600,
                      fontSize: 16,
                      color: neural500,
                    }}
                  >
                    Price
                  </Typography>
                  <TextField
                    inputProps={{
                      style: {
                        fontSize: 14,
                        backgroundColor: purplishBluePale,
                        color: purplishBlueDark,
                      },
                    }}
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                    id="Price"
                    name="Price"
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} pb={2}>
                  <Typography
                    sx={{
                      fontFamily: fontType,
                      fontWeight: 600,
                      fontSize: 16,
                      color: neural500,
                    }}
                  >
                    Category
                  </Typography>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    defaultValue="Form 1"
                    onChange={() => console.log("nothing")}
                    autoWidth
                    size="small"
                  >
                    <MenuItem value="Category">Category</MenuItem>
                    <MenuItem value="Form 1">Form 1</MenuItem>
                    <MenuItem value="Form 2">Form 2</MenuItem>
                    <MenuItem value="Form 3">Form 3</MenuItem>
                  </Select>
                </Grid>
                {preview && (
                  <Grid item xs={12} alignSelf="flex-start">
                    <img width="100px" src={preview}></img>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <label htmlFor="contained-button-file">
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      type="file"
                      hidden
                      onChange={handleImage}
                    />
                    <Button variant="contained" component="span">
                      {loading ? 'Uploading...' : 'Upload Image'}
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
                        Remove
                      </Button>
                    )}
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

export default CreateCourseScreen;
