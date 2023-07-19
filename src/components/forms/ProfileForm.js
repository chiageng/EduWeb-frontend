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
} from "@mui/material";
import {
  neural500,
  neural900,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
} from "../../design/color";
import { fontType } from "../../design/font";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";

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
  onClick,
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
}) {
  const navigate = useNavigate();

  return (
    <Box mt={2}>
      <img
        src="/images/userprofile.jpg"
        style={{ height: "100px", width: "100%" }}
      />
      <Grid container direction="column" ml={2} mt={-8} mb={2}>
        <Grid item>
          <Avatar sx={{ height: "100px", width: "100px" }} />
        </Grid>
        <Grid item>
          <Grid
            container
            display="flex"
            sx={{
              textDecoration: "none",
              ":hover": {
                cursor: "pointer",
              },
              width: "100%",
            }}
            onClick={() => navigate("/myprofile/edit")}
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
                  onChange={e => setExamTitle(e.target.value)}
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
                  id="GradeYear"
                  defaultValue=""
                  value={gradeYear}
                  onChange={e => setGradeYear(e.target.value)}
                  autoWidth
                  size="small"
                  sx={{ minWidth: "200px", backgroundColor: purplishBluePale, fontSize: 14 }}
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
                  onChange={e => setSchool(e.target.value)}
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
                  id="gender"
                  defaultValue="-"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  autoWidth
                  size="small"
                  sx={{ minWidth: "200px", backgroundColor: purplishBluePale, fontSize: 14 }}
                >
                  <MenuItem value="-">-</MenuItem>
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
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  onClick={onClick}
                  variant="contained"
                  sx={{
                    backgroundColor: purplishBlue,
                    fontFamily: fontType,
                    fontWeight: 400,
                    borderRadius: 5,
                    px: 2,
                    py: 1,
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
