import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { fontType } from "../../design/font";
import {
  activeBlueButton,
  activeLightBlueButton,
  activeRedButton,
  hoverBlueButton,
  hoverLightBlueButton,
  hoverRedButton,
  neural900,
  orangeLight,
  pressedBlueButton,
  pressedLightBlueButton,
  pressedRedButton,
  purplishBlueLight,
  red,
  white,
} from "../../design/color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { deleteTopic } from "../../actions/courseActions";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Topic({ topic, user }) {
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
    navigate(`/mycourses/${params.slug}/${topic.slug}`);
  };

  return (
    <>
      {/* Topic card for Webpage */}
      <Card
        sx={{
          display: { xs: "none", md: "flex" },
          mx: 5,
          borderRadius: "10px",
          mb: "16px",
          alignItems: "center"
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 64, mx: 2, height: 64}}
          image={topic && topic.image.Location}
        />
        <Box sx={{ display: "flex", flexGrow: 1, minHeight: "100px", alignItems:"center" }}>
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
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
              minWidth: "600px"
            }}
          >
            {user && user.user.is_staff && (
              <Button
                key="/handleEdit"
                onClick={handleEdit}
                sx={{
                  my: "24px",
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "140%",
                  borderRadius: 2,
                  height: 45,
                  mr: 3,
                  px: 2,
                  fontFamily: fontType,
                  color: neural900,
                  fontWeight: 600,
                  backgroundColor: activeLightBlueButton,
                  ":hover": { backgroundColor: hoverLightBlueButton },
                  ":focus": { backgroundColor: pressedLightBlueButton },
                }}
                endIcon={<EditOutlinedIcon/>}
              >
                Edit
              </Button>
            )}

            {user && user.user.is_staff && (
              <Button
                key="/handleDelete"
                onClick={handleDelete}
                sx={{
                  my: "24px",
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: "140%",
                  borderRadius: 2,
                  mr: 3,
                  height: 45,
                  px: 2,
                  fontFamily: fontType,
                  backgroundColor: activeRedButton,
                  color: neural900,
                  fontWeight: 600,
                  ":hover": { backgroundColor: hoverRedButton },
                  ":focus": { backgroundColor: pressedRedButton },
                }}
                endIcon={<DeleteOutlineIcon/>}
              >
                Delete
              </Button>
            )}
            <Button
              key="/courses"
              onClick={handleWatch}
              sx={{
                my: "24px",
                fontSize: 14,
                textTransform: "capitalize",
                px: 2,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 2,
                height: 45,
                mr: 3,
                fontFamily: fontType,
                backgroundColor: activeBlueButton,
                color: white,
                fontWeight: 600,
                ":hover": { backgroundColor: hoverBlueButton },
                ":focus": { backgroundColor: pressedBlueButton },
              }}
              endIcon={<PlayArrowOutlinedIcon/>}
            >
              Watch Lesson
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Topic Card for phone  */}
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          borderRadius: 3,
          mb: "16px",
          alignItems:"center"
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 40, mx: 1, height: 40 }}
          image={topic.image.Location}
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
              mr={0}
              mt={1}
            >
              {topic.title}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
              minWidth: "150px",
              alignItems: "center"
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
                  mr: 1,
                  width: 36,
                  height: 36,
                  fontFamily: fontType,
                  backgroundColor: activeLightBlueButton,
                  color: neural900,
                  fontWeight: 600,
                  ":hover": { backgroundColor: hoverLightBlueButton },
                  ":focus": { backgroundColor: pressedLightBlueButton },
                }}
              >
                <EditOutlinedIcon/>
              </Button>
            )}
            <Button
              key="/courses"
              onClick={handleWatch}
              sx={{
                my: 2,
                display: "block",
                fontSize: 5,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 5,
                width: 36,
                height: 36,
                mr:1,
                backgroundColor: activeBlueButton,
                color: white,
                ":hover": { backgroundColor: hoverBlueButton },
                ":focus": { backgroundColor: pressedBlueButton },
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
