import React from "react";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { neural500, neural900, purplishBlue, white, purplishBlueDark } from "../design/color";
import Topic from "../components/Topic";
import { courses } from "../Courses";
import { fontType } from "../design/font";

function MyCourseScreen() {
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
        Video Topics
      </Typography>
    </Breadcrumbs>
  );
  return (
    <Container>
      <Box pt={5} pb={10}>
      {breadcrumb}
      {/* View Quiz button for webpage */}
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>
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
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: purplishBlue,
                fontFamily: fontType,
                color: white,
                fontSize: 14,
                width: "100%",
                borderRadius: 3,
                textDecoration: 'none',
                ":hover": { backgroundColor: purplishBlueDark },
              }}
              // href={`/mycourses/${params.id}/myquiz`}
              as={Link}
              to={`/mycourses/${params.id}/myquiz`}
            >
              View Quiz
            </Button>
          </Grid>
        </Grid>


        
        {topics.map((topic) => (
          <Topic key={topic._id} topic={topic} />
        ))}
      </Box>
    </Container>
  );
}

export default MyCourseScreen;
