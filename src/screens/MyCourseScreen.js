import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Topic from "../components/Topic";
import { courses } from "../Courses";

function MyCourseScreen() {
  const params = useParams();
  const course = courses.find(course => course._id === params.id);
  const topics = course.topics;

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/mycourses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        My Course
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Video Topics
      </Typography>
    </Breadcrumbs>
  );
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
        Video Topics
      </Typography>
      {breadcrumb}
      {topics.map( topic => (
        <Topic key={topic._id} topic={topic}/>
      ))}
    </Box>
    </Container>
  );
}

export default MyCourseScreen;
