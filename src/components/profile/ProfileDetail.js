import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
} from "@mui/material";
import {  neural500, neural900, white } from "../../design/color";
import { fontType } from "../../design/font";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import { useNavigate } from "react-router-dom";

function ProfileDetail({name, gradeYear, state, country, school}) {
  const navigate = useNavigate();
  console.log(name);

  return (
    <>
      <Grid container direction="column" alignItems="center" mb={2}>
        <Grid item>
          <Avatar sx={{ height: "100px", width: "100px" }} />
        </Grid>
        <Grid item>
          {" "}
          <Typography
            fontFamily={fontType}
            fontWeight={600}
            color={neural900}
            fontSize="28px"
            mt={0.5}
          >
            {name}
          </Typography>
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
            onClick={() => navigate('/myprofile/edit')}
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
                Edit my profile
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
          <Grid container display="flex">
            <Grid item>
              <LibraryBooksOutlinedIcon
                sx={{ fontSize: 16, color: neural900 }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={400}
                color={neural900}
                fontSize="16px"
                mt={0.5}
                ml={2}
              >
                {gradeYear}
              </Typography>
            </Grid>
          </Grid>

          <Grid container display="flex">
            <Grid item>
              <SchoolOutlinedIcon sx={{ fontSize: 16, color: neural900 }} />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={400}
                color={neural900}
                fontSize="16px"
                mt={0.5}
                ml={2}
              >
                {school}
              </Typography>
            </Grid>
          </Grid>

          <Grid container display="flex">
            <Grid item>
              <LocationOnOutlinedIcon sx={{ fontSize: 16, color: neural900 }} />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={400}
                color={neural900}
                fontSize="16px"
                mt={0.5}
                ml={2}
              >
                {state}, {country}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          mb: "16px",
          width: "100%",
          mt: "25px",
        }}
      >
        <CardContent sx={{ width: "100%", minHeight: "100px" }}>
          <Grid container display="flex">
            <Grid item>
              <OutlinedFlagIcon
                sx={{ fontSize: 18, color: neural900, fontWeight: 800 }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={800}
                color={neural900}
                fontSize="16px"
                mt={0.5}
                ml={1}
              >
                Remarks
              </Typography>
            </Grid>
          </Grid>

          <Divider flexItem />
        </CardContent>
      </Card>
    </>
  );
}

export default ProfileDetail;
