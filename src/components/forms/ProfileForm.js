import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  TextField,
  MenuItem,
  Select,
  Button,
  FormControl,
} from "@mui/material";
import {
  neural500,
  neural900,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  activeBlueButton,
  hoverBlueButton,
  pressedBlueButton,
  activeBorderBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  neural300,
} from "../../design/color";
import { fontType } from "../../design/font";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Badge from "@mui/material/Badge";

function ProfileForm({
  name,
  examTitle,
  gradeYear,
  school,
  gender,
  phoneNumber,
  address1,
  address2,
  postalCode,
  state,
  country,
  handleSaveProfile,
  setName,
  setExamTitle,
  setGradeYear,
  setSchool,
  setGender,
  setPhoneNumber,
  setAddress1,
  setAddress2,
  setPostalCode,
  setState,
  setCountry,
  handleEditPhoto,
  image,
  handleCancel,
  handleEditBackground,
  background,
  removeBackground,
}) {
  return (
    <Box mt={2}>
      <Box width="100%" height="100px">
        {background && (
          <Badge
            badgeContent={"X"}
            color="error"
            sx={{ width: "100%", ":hover": { cursor: "pointer" } }}
            onClick={removeBackground}
          >
            <img src={background} style={{ height: "100px", width: "100%", objectFit: "fill" }} />
          </Badge>
        )}

        {!background && (
          <img
            src={"/images/userprofile.jpg"}
            style={{ height: "100%", width: "100%", objectFit: "fill" }}
          />
        )}
      </Box>

      <Grid container display="flex" justifyContent="end" mt={-7} pr={1}>
        <Grid item>
          <label htmlFor="contained-button-file-background">
            <input
              accept="image/*"
              id="contained-button-file-background"
              type="file"
              hidden
              onChange={handleEditBackground}
            />

            <Button
              component="span"
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
                  backgroundColor: white,
                },
                ":focus": {
                  bgcolor: pressedBorderBackgroundBlueButton,
                  borderColor: pressedBorderBlueButton,
                },
              }}
              endIcon={<ModeEditOutlineOutlinedIcon />}
            >
              <span>Edit</span>
            </Button>
          </label>
        </Grid>
      </Grid>

      {/* Avatar for webpage display */}
      <Grid
        container
        direction="column"
        ml={2}
        mt={-4}
        mb={5}
        display={{ xs: "none", md: "block" }}
      >
        <Grid>
          <Avatar
            sx={{ height: "100px", width: "100px" }}
            src={image && image}
          />
        </Grid>
        <Grid item>
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              hidden
              onChange={handleEditPhoto}
            />
            <Grid
              container
              component="span"
              display="flex"
              sx={{
                textDecoration: "none",
                ":hover": {
                  cursor: "pointer",
                },
                width: "100px",
                position: "absolute",
              }}
              ml={1}
            >
              <Grid item>
                <EditOutlinedIcon sx={{ fontSize: 14, color: neural500 }} />
              </Grid>
              <Grid item>
                <Typography
                  fontFamily={fontType}
                  fontWeight={400}
                  color={neural500}
                  fontSize="14px"
                  mt={1}
                  textAlign="center"
                >
                  Edit Photo
                </Typography>
              </Grid>
            </Grid>
          </label>
        </Grid>
      </Grid>

      {/* Avatar for phone display */}
      <Grid
        container
        direction="column"
        mt={-6}
        mb={5}
        display={{ xs: "flex", md: "none" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Avatar
            sx={{ height: "100px", width: "100px" }}
            src={image && image}
          />
        </Grid>
        <Grid item>
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              hidden
              onChange={handleEditPhoto}
            />
            <Grid
              container
              display="flex"
              component="span"
              sx={{
                textDecoration: "none",
                ":hover": {
                  cursor: "pointer",
                },
                ":focus": {
                  backgroundColor: "transparent",
                },
                width: "100px",
                position: "absolute",
              }}
              mt={0}
              ml={-5.5}
            >
              <Grid item>
                <EditOutlinedIcon sx={{ fontSize: 14, color: neural500 }} />
              </Grid>
              <Grid item>
                <Typography
                  fontFamily={fontType}
                  fontWeight={400}
                  color={neural500}
                  fontSize="14px"
                  mt={1}
                >
                  Edit Photo
                </Typography>
              </Grid>
            </Grid>
          </label>
        </Grid>
      </Grid>

      <Card
        sx={{
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          mb: "16px",
          width: "100%",
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Typography
            fontFamily={fontType}
            fontWeight={800}
            color={neural900}
            fontSize="16px"
            mt={0.5}
          >
            Personal Information
          </Typography>

          {/* Form  */}
          <Box width="90%" mt={2}>
            <Grid container display="flex" justifyContent="space-between">
              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Username
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  required
                  id="Username"
                  name="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Exam Title
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  value={examTitle}
                  onChange={(e) => setExamTitle(e.target.value)}
                  required
                  id="CourseTitle"
                  name="courseTitle"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Grade Year
                </Typography>

                <Select
                  fullWidth
                  id="GradeYear"
                  defaultValue=""
                  value={gradeYear}
                  onChange={(e) => setGradeYear(e.target.value)}
                  size="small"
                  sx={{
                    minWidth: "200px",
                    backgroundColor: purplishBluePale,
                    fontSize: 14,
                  }}
                >
                  <MenuItem value="-">-</MenuItem>
                  <MenuItem value="Standard 1">Standard 1</MenuItem>
                  <MenuItem value="Standard 2">Standard 2</MenuItem>
                  <MenuItem value="Standard 3">Standard 3</MenuItem>
                  <MenuItem value="Standard 4">Standard 4</MenuItem>
                  <MenuItem value="Standard 5">Standard 5</MenuItem>
                  <MenuItem value="Standard 6">Standard 6</MenuItem>
                  <MenuItem value="Form 1">Form 1</MenuItem>
                  <MenuItem value="Form 2">Form 2</MenuItem>
                  <MenuItem value="Form 3">Form 3</MenuItem>
                  <MenuItem value="Form 4">Form 4</MenuItem>
                  <MenuItem value="Form 5">Form 5</MenuItem>
                  <MenuItem value="Upper Level">Upper Level</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  School
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  required
                  id="School"
                  name="School"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 16,
                    color: neural900,
                    mt: 1,
                  }}
                >
                  example@gmail.com
                </Typography>
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Gender
                </Typography>
                <Select
                  fullWidth
                  id="gender"
                  defaultValue=""
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  size="small"
                  sx={{ backgroundColor: purplishBluePale, fontSize: 14 }}
                >
                  <MenuItem value="">-</MenuItem>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12} md={5.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Phone number
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  required
                  id="PhoneNumber"
                  name="PhoneNumber"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            <Typography
              fontFamily={fontType}
              fontWeight={800}
              color={neural900}
              fontSize="16px"
              mt={0.5}
            >
              Address
            </Typography>

            <Grid container display="flex" justifyContent="space-between">
              <Grid item xs={12} mb={3} mt={2}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Address line 1
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setAddress1(e.target.value)}
                  value={address1}
                  required
                  id="Address1"
                  name="Address1"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Address line 2
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setAddress2(e.target.value)}
                  value={address2}
                  required
                  id="Address2"
                  name="Address2"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={3.5} mr={2} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Postal Code
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setPostalCode(e.target.value)}
                  value={postalCode}
                  required
                  id="PostalCode"
                  name="PostalCode"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={3.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  State
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  required
                  id="State"
                  name="State"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={3.5} mb={3}>
                <Typography
                  sx={{
                    fontFamily: fontType,
                    fontWeight: 600,
                    fontSize: 14,
                    color: neural500,
                  }}
                >
                  Country
                </Typography>
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 14,
                      backgroundColor: purplishBluePale,
                      color: purplishBlueDark,
                    },
                  }}
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  required
                  id="Country"
                  name="Country"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>

            {/* Button */}
            <Grid container justifyContent="center" display="flex">
              <Grid item xs={12} md={2} mt={1.5}>
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
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item md={0.5} xs={false} mt={1}></Grid>
              <Grid item xs={12} md={3} mt={1.5}>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSaveProfile}
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
                  Update Profile
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileForm;
