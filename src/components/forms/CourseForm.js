import {
  Typography,
  TextField,
  Grid,
  Card,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import React from "react";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  red,
  hoverBlueButton,
  pressedBlueButton,
  activeBlueButton,
  pressedBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  hoverBorderBlueButton,
  activeBorderBlueButton,
  hoverRedButton,
  pressedRedButton,
} from "../../design/color";
import { fontType } from "../../design/font";
import Loader from "../universal/Loader";
import { useNavigate } from "react-router-dom";

export const CourseForm = ({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  level,
  setLevel,
  preview,
  handleImage,
  handleImageRemove,
  handleSubmit,
  loading,
  imageLoading,
  imageDeleteLoading,
  update,
}) => {
  const navigate = useNavigate();
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Card>
          <Grid container spacing={3} m={1} width="95%">
            <Grid item xs={12} sm={6} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Course Title*
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

            <Grid item xs={12} sm={6} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Category*
              </Typography>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                onChange={(e) => setCategory(e.target.value)}
                size="small"
                value={category}
                fullWidth
                sx={{
                  backgroundColor: purplishBluePale,
                  fontSize: 14,
                }}
              >
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Chemistry">Chemistry</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
                <MenuItem value="Chinese">Chinese</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Malay">Malay</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Course Description*
              </Typography>
              <TextField
                sx={{ ".MuiFilledInput-root": { p: 0 } }}
                multiline
                minRows={4}
                variant="filled"
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                  },
                }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                id="description"
                name="description"
                fullWidth
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
                Level*
              </Typography>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                // defaultValue="Form 1"
                onChange={(e) => setLevel(e.target.value)}
                fullWidth
                value={level}
                size="small"
                sx={{ backgroundColor: purplishBluePale, width: "200px" }}
              >
                <MenuItem value="Form 1">Form 1</MenuItem>
                <MenuItem value="Form 2">Form 2</MenuItem>
                <MenuItem value="Form 3">Form 3</MenuItem>
                <MenuItem value="Form 4">Form 4</MenuItem>
                <MenuItem value="Form 5">Form 5</MenuItem>
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
                <Button
                  type="submit"
                  variant="contained"
                  component="span"
                  disabled={imageLoading || imageDeleteLoading}
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
                  {imageLoading
                    ? "Uploading..."
                    : imageDeleteLoading
                    ? "Deleting..."
                    : "Upload Image"}
                </Button>
                {preview && (
                  <Button
                    sx={{
                      ml: 2,
                      color: neural900,
                      fontSize: 12,
                      px: 4,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 300,
                      backgroundColor: red,
                      textTransform: "capitalize",
                      color: white,
                      ":hover": {
                        backgroundColor: hoverRedButton,
                      },
                      ":focus": { backgroundColor: pressedRedButton}
                    }}
                    onClick={handleImageRemove}
                    disabled={imageLoading || imageDeleteLoading}
                  >
                    Remove
                  </Button>
                )}
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
                  onClick={() => navigate("/admin/courses")}
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
                  {update ? "Update Course" : "Create Course"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      )}
    </>
  );
};
