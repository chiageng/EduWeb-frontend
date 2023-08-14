import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Progress from "../universal/Progress";
import Box from "@mui/material/Box";
import {
  neural900,
  purplishBlue,
  hotPink,
  skyBlue,
  neural700,
  orangeLight,
  neural500,
  activeBlueButton,
  hoverBlueButton,
  pressedBlueButton,
  white,
} from "../../design/color";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { fontType } from "../../design/font";

function Course({ course, staff, progress }) {
  const colors = [purplishBlue, hotPink, skyBlue];
  const useColor = colors[course._id % 3];
  const navigate = useNavigate()

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={course.image ? course.image.Location : "/images/Maths.jpg"}
        title={course.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          fontFamily="Poppins"
          sx={{
            fontSize: 18,
            fontWeight: 700,
            fontStyle: "normal",
            color: neural900,
          }}
          variant="h5"
          component="div"
        >
          {course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {course.category}
        </Typography>
        {!staff && (
          <Progress
            progress={progress}
            color={course._id % 3}
          ></Progress>
        )}
        {staff && (
          <Typography
            gutterBottom
            fontFamily="Poppins"
            sx={{
              fontSize: 12,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
            }}
            component="div"
          >
            (Instructor view)
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "left" }}>
          <Button
            size="small"
            onClick={() => navigate(`/mycourses/${course.slug}`)}
            style={{
              textDecoration: "none",
              fontFamily: fontType,
              color: neural900,
              display: "flex",
            }}
            startIcon={<PlayCircleFilledWhiteIcon/>}
          >
            Lesson
          </Button>
        </Box>
        <Button
            size="small"
            onClick={() => navigate(`/mycourses/${course.slug}/myquiz`)}
            sx={{
              color: neural900,
              fontSize: 12,
              fontWeight: 600,
              color: white,
              borderRadius: 2,
              px: 3,
              py: 1,
              fontFamily: "Poppins",
              backgroundColor: activeBlueButton,
              ":hover": {
                backgroundColor: hoverBlueButton,
              },
              ":focus": {
                backgroundColor: pressedBlueButton,
              },
            }}
          >
            View Quiz
          </Button>
      </CardActions>
    </Card>
  );
}

export default Course;
