import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid, Typography } from "@mui/material";
import { neural500, neural900, white } from "../../design/color";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewCourse, viewCourses } from "../../actions/courseActions";
import { Div } from "../../navbar/AdminAppBar";
import Loader from "../../components/universal/Loader";
import AdminCourseCard from "../../components/adminScreenHelpers/AdminCourseCard";

function AdminCourses() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const coursesView = useSelector((state) => state.coursesView);
  const { loading, courses, error } = coursesView;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user && !courses && user.user.is_staff) {
      dispatch(viewCourses());
    }
  }, [user, courses, open]);

  const handleButton = () => {
    navigate("/createcourse");
  };

  const breadcrumb = (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      mb={3}
    >
      <Typography
        as={Link}
        to="/admin"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Home
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        My Courses
      </Typography>
    </Breadcrumbs>
  );
  return (
    <>
      {loading && <Div><Loader /></Div>}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
            <Typography
              variant="h3"
              fontFamily={fontType}
              sx={{
                fontSize: 24,
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              My Courses
            </Typography>
          </Div>
          <Div>
            {courses && (
              <Grid container spacing={3}>
                {courses.map((course) => (
                  <Grid item xs={12} sm={4} md={3} key={course.course._id}>
                    <AdminCourseCard course={course.course}></AdminCourseCard>
                  </Grid>
                ))}
              </Grid>
            )}{" "}
          </Div>
        </>
      )}
    </>
  );
}

export default AdminCourses;
