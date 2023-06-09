import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid } from "@mui/material";
import { neural500, neural900 } from "../design/color";
import Topic from "../components/Topic";
import { courses } from "../Courses";
import QuizCard from "../components/QuizCard";

function MyQuizzesScreen() {
  const params = useParams();
  const course = courses.find((course) => course._id === params.id);
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
        My Quizzes
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
          My Quizzes
        </Typography>
        {breadcrumb}
        <Grid container spacing={2}>
          {topics.map((topic) => (
            <Grid key={topic._id} item xs={12} md={4}>
              <QuizCard key={topic._id} topic={topic} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MyQuizzesScreen;
