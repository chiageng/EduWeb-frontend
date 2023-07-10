import React, { useEffect } from "react";
import VideoPlayer from "../components/screenHelpers/VideoPlayer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import {
  neural300,
  neural500,
  neural700,
  neural900,
  white,
} from "../design/color";
import PlayList from "../components/screenHelpers/PlayList";
import Forum from "../components/screenHelpers/Forum";
import { fontType } from "../design/font";
import { orangeLight } from "../design/color";
import OutlinedFlagSharpIcon from "@mui/icons-material/OutlinedFlagSharp";
import PhonePlayList from "../components/screenHelpers/PhonePlayList";
import { useDispatch, useSelector } from "react-redux";
import { userWatchVideo, watchVideo } from "../actions/courseActions";
import Loader from "../components/universal/Loader";

function VideoScreen() {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videoWatch = useSelector((state) => state.videoWatch);
  const { loading, lesson, lessons, error, course } = videoWatch;

  const userLogin = useSelector(state => state.userLogin);
  const { user } = userLogin;

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
        as={Link}
        to={`/mycourses/${params.slug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        underline="none"
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
        {lesson && lesson.title}
      </Typography>
    </Breadcrumbs>
  );

  useEffect(() => {
    if ((!lesson || lesson.slug != params.topicSlug) && user.user.is_staff ) {
      dispatch(watchVideo({ slug: params.slug, topicSlug: params.topicSlug }));
    }
    if ((!lesson || lesson.slug != params.topicSlug) && !user.user.is_staff ) {
      dispatch(userWatchVideo({ slug: params.slug, topicSlug: params.topicSlug }));
    }
  }, [params, user]);

  return (
    <Container>
      {loading && <Loader />}
      {!loading && (
        <Box pt={5} pb={10}>
          <Typography
            variant="h3"
            fontFamily="Poppins"
            sx={{
              fontSize: "32px",
              fontWeight: 600,
              fontStyle: "normal",
              color: neural900,
              mb: "32px",
            }}
          >
            {lesson && lesson.title}
          </Typography>
          {breadcrumb}
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <VideoPlayer video={lesson && lesson.video.Location} image={lesson && lesson.image.Location} />
              <Card
                sx={{
                  display: "flex",
                  borderRadius: "5px",
                  mb: "16px",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", flexGrow: 1 }}>
                  <CardContent>
                    <Typography
                      component="div"
                      variant="h5"
                      fontFamily={fontType}
                      fontWeight={900}
                      color={neural900}
                      fontSize="32px"
                    >
                      {lesson && lesson.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={neural700}
                      fontSize="14px"
                      fontFamily={fontType}
                      component="div"
                    >
                      Topic description
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color={neural300}
                      fontSize="14px"
                      fontFamily={fontType}
                      component="div"
                    >
                      Published on {lesson && lesson.createdAt.substring(0, 10)}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexGrow: 1,
                      justifyContent: "right",
                      pl: 1,
                      pb: 1,
                    }}
                  >
                    <Button
                      key="/courses"
                      href={`/videos`}
                      style={{ textAlign: "center" }}
                      sx={{
                        my: "24px",
                        display: "block",
                        fontSize: 14,
                        fontWeight: 600,
                        lineHeight: "140%",
                        borderRadius: 10,
                        mr: 3,
                        fontFamily: fontType,
                        backgroundColor: white,
                        color: neural900,
                        height: "40px",
                        ":hover": { backgroundColor: orangeLight },
                      }}
                    >
                      <OutlinedFlagSharpIcon ml={2} />
                    </Button>
                  </Box>
                </Box>
              </Card>

              {/* Phone Playlist */}
              <PhonePlayList lessons={lessons} title={course && course.title} instructor={course && course.instructor_name}/>

              {/* Forum for both phone and webpage */}
              <Forum />
            </Grid>

            {/* Webpage playlist */}
            <Grid item md={4} display={{ xs: "none", md: "flex" }}>
              <PlayList lessons={lessons} title={course && course.title} instructor={course && course.instructor_name}/>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default VideoScreen;
