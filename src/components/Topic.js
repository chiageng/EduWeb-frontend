import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { fontType } from "../design/font";
import {
  neural500,
  neural900,
  orangeLight,
  purplishBlue,
  purplishBlueDark,
  purplishBlueLight,
  purplishBluePale,
  red,
} from "../design/color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { deleteTopic } from "../actions/courseActions";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Topic({ topic, user }) {
  const currentUrl = window.location.href;
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/mycourses/${params.slug}/edittopic/${topic._id}`);
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure wnat to delete?");
    if (!confirm) {
      return;
    }
    dispatch(deleteTopic({ slug: params.slug, lesson_id: topic._id }));
  };

  const handleWatch = () => {
    navigate(`/mycourses/${params.slug}/${topic.slug}`)
  }

  const old = (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "right",
        pl: 1,
        pb: 1,
      }}
    >
      {user && user.user.is_staff && (
        <Button
          key="/handleEdit"
          onClick={handleEdit}
          sx={{
            my: "24px",
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "140%",
            borderRadius: 4,
            height: 45,
            width: 180,
            mr: 3,
            fontFamily: fontType,
            backgroundColor: purplishBlueLight,
            color: neural900,
            fontWeight: 600,
            ":hover": { backgroundColor: purplishBlueLight },
          }}
        >
          <Grid container>
            <Grid item mt={0.5} px={2}>
              Edit Video
            </Grid>
            <Grid item pr={2}>
              <EditOutlinedIcon />
            </Grid>
          </Grid>
        </Button>
      )}
      {user && user.user.is_staff && (
        <Button
          key="/handleDelete"
          onClick={handleDelete}
          sx={{
            my: "24px",
            display: "block",
            fontSize: 14,
            fontWeight: 600,
            lineHeight: "140%",
            borderRadius: 4,
            mr: 3,
            fontFamily: fontType,
            backgroundColor: red,
            color: neural900,
            fontWeight: 600,
            ":hover": { backgroundColor: red },
          }}
        >
          <Grid container>
            <Grid item mt={0.5} px={2}>
              Delete Video
            </Grid>
            <Grid item pr={2}>
              <DeleteOutlineIcon />
            </Grid>
          </Grid>
        </Button>
      )}
      <Button
        key="/courses"
        onClick={handleWatch}
        sx={{
          my: "24px",
          display: "block",
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "140%",
          borderRadius: 10,
          mr: 3,
          fontFamily: fontType,
          backgroundColor: orangeLight,
          color: neural900,
          fontWeight: 600,
          ":hover": { backgroundColor: orangeLight },
        }}
      >
        <Grid container>
          <Grid item mt={0.5} px={2}>
            Watch Videos
          </Grid>
          <Grid item pr={2}>
            <PlayArrowOutlinedIcon />
          </Grid>
        </Grid>
      </Button>
    </Box>
  );

  return (
    <>
      {/* Topic card for Webpage */}
      <Card
        sx={{
          display: { xs: "none", md: "flex" },
          mx: 5,
          borderRadius: "10px",
          mb: "16px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 64, mx: 2, height: 64, mt: 2 }}
          image="/images/chem-logo.jpg"
        />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Grid container spacing={0} justifyContent="space-between">
            <Grid item>
              <CardContent>
                <Typography
                  component="div"
                  variant="h5"
                  fontFamily={fontType}
                  fontWeight={700}
                  color={neural900}
                  fontSize="18px"
                >
                  {topic.title}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  {user && user.user.is_staff && (
                    <Button
                      key="/handleEdit"
                      onClick={handleEdit}
                      sx={{
                        my: "24px",
                        display: "block",
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: "140%",
                        borderRadius: 4,
                        height: 45,
                        mr: 3,
                        fontFamily: fontType,
                        backgroundColor: purplishBlueLight,
                        color: neural900,
                        fontWeight: 600,
                        ":hover": { backgroundColor: purplishBlueLight },
                      }}
                    >
                      <Grid container>
                        <Grid item mt={0.5} px={2}>
                          Edit
                        </Grid>
                        <Grid item pr={2}>
                          <EditOutlinedIcon />
                        </Grid>
                      </Grid>
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  {user && user.user.is_staff && (
                    <Button
                      key="/handleDelete"
                      onClick={handleDelete}
                      sx={{
                        my: "24px",
                        display: "block",
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: "140%",
                        borderRadius: 4,
                        mr: 3,
                        fontFamily: fontType,
                        backgroundColor: red,
                        color: neural900,
                        fontWeight: 600,
                        ":hover": { backgroundColor: red },
                      }}
                    >
                      <Grid container>
                        <Grid item mt={0.5} px={2}>
                          Delete
                        </Grid>
                        <Grid item pr={2}>
                          <DeleteOutlineIcon />
                        </Grid>
                      </Grid>
                    </Button>
                  )}
                </Grid>
                <Grid item>
                  <Button
                    key="/courses"
                    onClick={handleWatch}
                    sx={{
                      my: "24px",
                      display: "block",
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: "140%",
                      borderRadius: 10,
                      mr: 3,
                      fontFamily: fontType,
                      backgroundColor: orangeLight,
                      color: neural900,
                      fontWeight: 600,
                      ":hover": { backgroundColor: orangeLight },
                    }}
                  >
                    <Grid container>
                      <Grid item mt={0.5} px={2}>
                        Watch Videos
                      </Grid>
                      <Grid item pr={2}>
                        <PlayArrowOutlinedIcon />
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Card>

      {/* Topic Card for phone  */}
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          borderRadius: 3,
          mb: "16px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 40, mx: 1, height: 40, mt: 2 }}
          image="/images/chem-logo.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontSize={14}
              fontFamily={fontType}
              fontWeight={700}
              color={neural900}
            >
              {topic.title}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            {user && user.user.is_staff && (
              <Button
                key="/handleEdit"
                onClick={handleEdit}
                sx={{
                  my: 2,
                  display: "block",
                  fontSize: 5,
                  fontWeight: 600,
                  lineHeight: "140%",
                  borderRadius: 5,
                  mr: 2,
                  width: 36,
                  height: 36,
                  fontFamily: fontType,
                  backgroundColor: purplishBlueLight,
                  color: neural900,
                  fontWeight: 600,
                  ":hover": { backgroundColor: purplishBlueLight },
                }}
              >
                <EditOutlinedIcon />
              </Button>
            )}
            <Button
              key="/courses"
              sx={{
                my: 2,
                display: "block",
                fontSize: 5,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 5,
                mr: 2,
                width: 36,
                height: 36,
                backgroundColor: orangeLight,
                color: neural900,
                ":hover": { backgroundColor: orangeLight },
              }}
            >
              <PlayArrowOutlinedIcon />
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}
