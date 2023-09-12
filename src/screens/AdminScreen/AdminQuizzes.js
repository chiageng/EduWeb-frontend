import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  neural500,
  neural900,
  purplishBlue,
  purplishBlueDark,
  white,
  orangeLight,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  hoverBorderBlueButton,
  activeBorderBlueButton,
  hoverOrangeButton,
  pressedOrangeButton,
  activeOrangeButton,
  hoverBlueButton,
  pressedBlueButton,
  activeBlueButton,
} from "../../design/color";
import QuizCard from "../../components/screenHelpers/QuizCard";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import { viewQuizzes, viewUserQuizzes } from "../../actions/quizAction";
import Loader from "../../components/universal/Loader";
import SearchIcon from "@mui/icons-material/Search";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import AdminQuizCard from "../../components/adminScreenHelpers/AdminQuizCard";
import { Div } from "../../navbar/AdminAppBar";

function AdminQuizzesScreen() {
  const params = useParams();
  // const course = courses[0];
  // const quizzes = course.quiz;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizzesView = useSelector((state) => state.quizzesView);
  const { loading, quizzes, course, error } = quizzesView;

  const [search, setSearch] = useState("");
  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const handleCreate = () => {
    navigate(`/mycourses/${params.slug}/myquiz/create`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let updatedList = [...quizzes];

    updatedList = updatedList.filter((item) => {
      return (
        item.quiz.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
        -1
      );
    });

    setFilteredQuizzes(updatedList);
  };

  useEffect(() => {
    if (!quizzes && user.user.is_staff) {
      dispatch(viewQuizzes(params.slug));
    }
    if (!quizzes && !user.user.is_staff) {
      dispatch(viewUserQuizzes(params.slug));
    }

    if (quizzes && course.slug !== params.slug && user.user.is_staff) {
      dispatch(viewQuizzes(params.slug));
    }

    if (quizzes && course.slug !== params.slug && !user.user.is_staff) {
      dispatch(viewUserQuizzes(params.slug));
    }
  }, [course, quizzes, params, open]);

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
        as={Link}
        to="/admin/courses"
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Courses
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${course && course.slug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {course && course.title}
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Quiz Topics
      </Typography>
    </Breadcrumbs>
  );
  return (
    <>
      {loading && (
        <Div>
          <Loader />
        </Div>
      )}
      {!loading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}

            <Grid container display="flex" alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural900,
                    mb: "18px",
                  }}
                >
                  Quiz Topics
                </Typography>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural900,
                  }}
                >
                  {course && course.title }
                </Typography>
              </Grid>
              <Grid item xs={12} md={3}>
                <TextField
                  fullWidth
                  margin="normal"
                  value={search}
                  onChange={handleSearch}
                  name="search"
                  label={`Search Quiz`}
                  id="search"
                  InputProps={{
                    style: {
                      backgroundColor: white,
                      height: "48px"
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={false} md={0.25}></Grid>

              <Grid item xs={12} md={1.5}>
                <Button
                  endIcon={<FileUploadOutlinedIcon/>}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    borderRadius: 2,

                    py: 1.5,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                  onClick={handleCreate}
                >
                  Upload Quiz
                </Button>
              </Grid>
            </Grid>
          </Div>

          <Div>
            {/* QuizCard */}
            <Grid container spacing={2}>
              {search === "" &&
                quizzes &&
                quizzes.map((quiz) => (
                  <Grid key={quiz.quiz._id} item xs={12} width="100%">
                    <AdminQuizCard
                      key={quiz._id}
                      quiz={quiz.quiz}
                      is_staff={user.user.is_staff}
                      score={quiz.score}
                      done={quiz.done}
                      published={quiz.quiz.published}
                    />
                  </Grid>
                ))}
              {search !== "" &&
                filteredQuizzes &&
                filteredQuizzes.map((quiz) => (
                  <Grid key={quiz.quiz._id} item xs={12} width="100%">
                    <AdminQuizCard
                      key={quiz._id}
                      quiz={quiz.quiz}
                      is_staff={user.user.is_staff}
                      score={quiz.score}
                      done={quiz.done}
                      published={quiz.quiz.published}
                    />
                  </Grid>
                ))}
            </Grid>
          </Div>
        </>
      )}
    </>
  );
}

export default AdminQuizzesScreen;