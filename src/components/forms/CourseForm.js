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
} from "../../design/color";
import { fontType } from "../../design/font";
import Loader from "../universal/Loader";

export const CourseForm = ({title, setTitle, price, setPrice, preview, handleImage, handleImageRemove, handleSubmit, loading, imageLoading, imageDeleteLoading}) => {

  return (
    <>
    {loading && <Loader/>}
    {!loading && <Grid container>
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
                    <Button variant="contained" component="span" disabled={imageLoading || imageDeleteLoading}>
                      {imageLoading ? 'Uploading...' : imageDeleteLoading ? "Deleting..." : 'Upload Image'}
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
                        disabled={imageLoading || imageDeleteLoading}
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
        </Grid>}
        </>
  )
}