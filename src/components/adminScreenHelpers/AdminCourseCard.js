import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Progress from "../universal/Progress";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Tooltip from "@mui/material/Tooltip";
import moment from "moment";
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
  green,
  red,
  orange,
} from "../../design/color";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { fontType } from "../../design/font";
import { Divider, Grid } from "@mui/material";

function AdminCourseCard({ course, handleDelete }) {
  const colors = [purplishBlue, hotPink, skyBlue];
  const useColor = colors[course._id % 3];
  const navigate = useNavigate();

  return (
    <Card sx={{ mx: "auto" }}>
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

        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: neural500,
                mt: 1,
              }}
            >
              Status
            </Typography>
          </Grid>
          <Grid item>
            <Chip
              size="small"
              label={course.published ? "Published" : "Unpublished"}
              style={{
                fontWeight: 400,
                backgroundColor: course.published ? green : red,
              }}
            ></Chip>
          </Grid>
        </Grid>

        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: neural500,
              }}
            >
              Category
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: purplishBlue,
                fontWeight: 600,
              }}
            >
              {course.category}
            </Typography>
          </Grid>
        </Grid>

        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: neural500,
              }}
            >
              Level
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: purplishBlue,
                fontWeight: 600,
              }}
            >
              {course.level}
            </Typography>
          </Grid>
        </Grid>

        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: neural500,
              }}
            >
              Students
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: purplishBlue,
                fontWeight: 600,
              }}
            >
              100
            </Typography>
          </Grid>
        </Grid>

        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: neural500,
              }}
            >
              Published Date
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              fontFamily="Poppins"
              sx={{
                fontSize: 14,
                color: purplishBlue,
                fontWeight: 600,
              }}
            >
              {moment.utc(course.createdAt).local().format("D MMM, YYYY")}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Divider />
      <CardActions>
        <Grid
          container
          display="flex"
          justifyContent="right"
          alignItems="center"
        >
          
          <Grid item mr={1} mt={1} 
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => navigate(`/admin/courses/${course.slug}/edit`)}
          >
            <Tooltip title="Edit Course">
              <EditOutlinedIcon />
            </Tooltip>
          </Grid>
          <Grid item mr={1} mt={1}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => navigate(`/admin/courses/${course.slug}/quiz`)}
          >
            <Tooltip title="View Quiz">
              <QuizOutlinedIcon style={{ color: orange }} />
            </Tooltip>
          </Grid>
          <Grid item mr={1} mt={1}
           sx={{ ":hover": { cursor: "pointer" } }}
           onClick={() => navigate(`/admin/courses/${course.slug}`)}
           >
            <Tooltip title="View Topics">
              <OndemandVideoOutlinedIcon style={{ color: purplishBlue }} />
            </Tooltip>
          </Grid>
          <Grid item mr={1} mt={1}
           sx={{ ":hover": { cursor: "pointer" } }}
           onClick={() => handleDelete(course.published, course.slug)}
          >
            <Tooltip title="Delete Course">
              <DeleteOutlineOutlinedIcon style={{ color: red }} />
            </Tooltip>
          </Grid>
        </Grid>
        {/* <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "left" }}>
          <Button
            size="small"
            onClick={() => navigate(`/mycourses/${course.slug}`)}
            style={{
              textDecoration: "none",
              fontFamily: fontType,
              color: neural900,
              display: "flex",
            }}
            startIcon={<PlayCircleFilledWhiteIcon />}
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
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default AdminCourseCard;
