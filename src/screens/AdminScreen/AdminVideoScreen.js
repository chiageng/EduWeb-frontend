import React, { useEffect, useRef, useState } from "react";
import VideoPlayer from "../../components/screenHelpers/VideoPlayer";
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
} from "../../design/color";
import PlayList from "../../components/screenHelpers/PlayList";
import Forum from "../../components/screenHelpers/Forum";
import { fontType } from "../../design/font";
import { orangeLight } from "../../design/color";
import OutlinedFlagSharpIcon from "@mui/icons-material/OutlinedFlagSharp";
import PhonePlayList from "../../components/screenHelpers/PhonePlayList";
import { useDispatch, useSelector } from "react-redux";
import { userWatchVideo, watchVideo } from "../../actions/courseActions";
import Loader from "../../components/universal/Loader";
import {
  createComment,
  downvoteComment,
  updateForum,
  upvoteComment,
  userUpdateForum,
  viewForum,
} from "../../actions/forumActions";
import {
  COMMENT_CREATE_RESET,
  COMMENT_VOTE_RESET,
} from "../../constants/forum";
import QuizList from "../../components/screenHelpers/QuizList";
import PhoneQuizList from "../../components/screenHelpers/PhoneQuizList";
import { viewQuizzes, viewUserQuizzes } from "../../actions/quizAction";
import moment from "moment";
import { Div } from "../../navbar/AdminAppBar";

function AdminVideoScreen() {
  const [comment, setComment] = useState("");

  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videoWatch = useSelector((state) => state.videoWatch);
  const { loading, lesson, lessons, error, course } = videoWatch;

  const forumView = useSelector((state) => state.forumView);
  const { loading: forumLoading, forum } = forumView;

  const commentCreate = useSelector((state) => state.commentCreate);
  const { success: commentCreateSuccess } = commentCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizzesView = useSelector((state) => state.quizzesView);
  const { loading: quizzesLoading, quizzes } = quizzesView;

  const commentVote = useSelector((state) => state.commentVote);
  const { success: voteSuccess } = commentVote;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

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
        to={`/admin/courses/${params.slug}`}
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

  const submitComment = (e) => {
    e.preventDefault();

    dispatch(
      createComment({ course: params.slug, lesson: lesson._id, comment })
    );

    setComment("");
  };

  const upVote = (commentId) => {
    dispatch(
      upvoteComment({
        slug: params.slug,
        topicSlug: params.topicSlug,
        commentId,
      })
    );
  };

  const downVote = (commentId) => {
    dispatch(
      downvoteComment({
        slug: params.slug,
        topicSlug: params.topicSlug,
        commentId,
      })
    );
  };

  const scrollRef = useRef(null);

  useEffect(() => {
    if (!lesson || lesson.slug != params.topicSlug) {
      dispatch(watchVideo({ slug: params.slug, topicSlug: params.topicSlug }));
    }
    if (commentCreateSuccess) {
      dispatch(
        updateForum({
          slug: params.slug,
          topicSlug: params.topicSlug,
          forumId: lesson.forum,
        })
      );
      dispatch({ type: COMMENT_CREATE_RESET });
    }

    if (voteSuccess) {
      dispatch(
        updateForum({
          slug: params.slug,
          topicSlug: params.topicSlug,
          forumId: lesson.forum,
        })
      );
      dispatch({ type: COMMENT_VOTE_RESET });
    }
  }, [params, user, lesson, commentCreateSuccess, forum, voteSuccess]);

  useEffect(() => {
    if (lesson) {
      dispatch(
        viewForum({
          slug: params.slug,
          topicSlug: params.topicSlug,
          forumId: lesson.forum,
        })
      );
    }
  }, [lesson]);

  useEffect(() => {
    if (course && !quizzes && user.user.is_staff) {
      dispatch(viewQuizzes(params.slug));
    }

    if (
      course &&
      quizzes &&
      course.slug !== params.slug
    ) {
      dispatch(viewQuizzes(params.slug));
    }

  }, [course, quizzes, params]);

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
            <Typography
              variant="h3"
              fontFamily="Poppins"
              sx={{
                fontSize: "32px",
                fontWeight: 600,
                fontStyle: "normal",
                color: neural900,
              }}
            >
              {lesson && lesson.title}
            </Typography>
          </Div>
          <Div>
            <Grid container spacing={5}>
              <Grid item xs={12} md={8}>
                <VideoPlayer
                  video={lesson && lesson.video.Location}
                  image={lesson && lesson.image.Location}
                />
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
                        Published on{" "}
                        {lesson &&
                          moment
                            .utc(lesson.createdAt)
                            .local()
                            .startOf("seconds")
                            .fromNow()}
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
              </Grid>

              {/* Phone Playlist */}
              <Grid item xs={12} display={{ xs: "block", md: "none" }} mt={-5}>
                <PhonePlayList
                  lessons={lessons}
                  title={course && course.title}
                  instructor={course && course.instructor_name}
                  admin={true}
                />
              </Grid>

              {/* Webpage playlist */}
              <Grid item md={4} display={{ xs: "none", md: "flex" }}>
                <PlayList
                  lessons={lessons}
                  title={course && course.title}
                  instructor={course && course.instructor_name}
                  admin={true}
                />
              </Grid>

              {/* Phone Quizlist */}
              <Grid item xs={12} display={{ xs: "block", md: "none" }} mt={-5}>
                <PhoneQuizList
                  instructor={course && course.instructor_name}
                  quizzes={quizzes}
                  isStaff={user.user.is_staff}
                  loading={quizzesLoading}
                  admin={true}
                />
              </Grid>

              <Grid item md={8} xs={12} mt={-5}>
                {/* Forum for both phone and webpage */}
                <Forum
                  comment={comment}
                  setComment={setComment}
                  submitComment={submitComment}
                  comments={forum}
                  scrollRef={scrollRef}
                  currentUser={user.user.name}
                  loading={forumLoading}
                  upVote={upVote}
                  downVote={downVote}
                />
              </Grid>

              {/* Webpage playlist */}
              <Grid item md={4} display={{ xs: "none", md: "flex" }} mt={-5}>
                <QuizList
                  instructor={course && course.instructor_name}
                  quizzes={quizzes}
                  isStaff={user.user.is_staff}
                  loading={quizzesLoading}
                  admin={true}
                />
              </Grid>
            </Grid>
          </Div>
        </>
      )}
    </>
  );
}

export default AdminVideoScreen;
