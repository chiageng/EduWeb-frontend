import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import {
  neural900,
  white,
  neural500,
  neural700,
  activeBlueButton,
  hoverBlueButton,
  pressedBlueButton,
  activeBorderBlueButton,
  hoverBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  purplishBlueDark,
} from "../../design/color";
import { fontType } from "../../design/font";
import {
  deleteQuizQuestion,
  editQuizQuestion,
  viewQuizQuestion,
} from "../../actions/quizAction";
import {
  QUIZ_QUESTION_DELETE_RESET,
  QUIZ_QUESTION_EDIT_RESET,
  QUIZ_QUESTION_VIEW_RESET,
  QUIZ_VIEW_RESET,
} from "../../constants/quiz";
import QuizQuestionForm from "../../components/forms/QuizQuestionForm";
import Loader from "../../components/universal/Loader";
import { deleteImage, uploadImage } from "../../actions/uploadActions";
import { Div } from "../../navbar/AdminAppBar";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import unslugify from "unslugify";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function EditQuizQuestionScreen() {
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false);
  const [preview1, setPreview1] = useState("");
  const [image1, setImage1] = useState("");
  const [preview2, setPreview2] = useState("");
  const [image2, setImage2] = useState("");
  const [preview3, setPreview3] = useState("");
  const [image3, setImage3] = useState("");
  const [preview4, setPreview4] = useState("");
  const [image4, setImage4] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  const quizQuestionView = useSelector((state) => state.quizQuestionView);
  const {
    loading,
    question: originalQuestion,
    choices,
    error,
  } = quizQuestionView;

  const quizQuestionEdit = useSelector((state) => state.quizQuestionEdit);
  const { loading: editLoading, success } = quizQuestionEdit;

  const quizQuestionDelete = useSelector((state) => state.quizQuestionDelete);
  const { success: deleteSuccess } = quizQuestionDelete;

  const imageUpload = useSelector((state) => state.imageUpload);
  const { loading: imageLoading, image: data, error: imageError } = imageUpload;

  const imageDelete = useSelector((state) => state.imageDelete);
  const {
    loading: imageDeleteLoading,
    success: deleteImageSuccess,
    error: deleteImageError,
  } = imageDelete;

  const leftBar = useSelector((state) => state.leftBar);
  const { open } = leftBar;

  const navigate = useNavigate();

  const params = useParams();

  const handleSubmit = (e) => {
    const choices = [
      { text: choice1, value: "a", image: image1 },
      { text: choice2, value: "b", image: image2 },
      { text: choice3, value: "c", image: image3 },
      { text: choice4, value: "d", image: image4 },
    ];
    dispatch(
      editQuizQuestion({
        slug: params.slug,
        quizSlug: params.quizSlug,
        choices,
        answer,
        question,
        explanation,
        questionId: params.questionId,
        image,
      })
    );
  };

  const handleDelete = (e) => {
    let confirm = window.confirm("Are you sure to delete this question?");
    if (confirm) {
      dispatch(
        deleteQuizQuestion({
          slug: params.slug,
          quizSlug: params.quizSlug,
          questionId: params.questionId,
        })
      );
    }
  };

  const handleCancel = (e) => {
    navigate(`/admin/courses/${params.slug}/quiz/${params.quizSlug}`);
  };

  const handleImageRemove = () => {
    dispatch(deleteImage(image, setPreview, setImage));
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview, setImage));
  };

  const handleImage1Remove = () => {
    dispatch(deleteImage(image1, setPreview1, setImage1));
  };

  const handleImage1 = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview1, setImage1));
  };

  const handleImage2Remove = () => {
    dispatch(deleteImage(image2, setPreview2, setImage2));
  };

  const handleImage2 = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview2, setImage2));
  };

  const handleImage3Remove = () => {
    dispatch(deleteImage(image3, setPreview3, setImage3));
  };

  const handleImage3 = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview3, setImage3));
  };

  const handleImage4Remove = () => {
    dispatch(deleteImage(image4, setPreview4, setImage4));
  };

  const handleImage4 = (e) => {
    let file = e.target.files[0];
    // setPreview(window.URL.createObjectURL(file));
    dispatch(uploadImage(file, setPreview4, setImage4));
  };

  useEffect(() => {
    if (success) {
      navigate(`/admin/courses/${params.slug}/quiz/${params.quizSlug}`);
      dispatch({ type: QUIZ_QUESTION_EDIT_RESET });
      dispatch({ type: QUIZ_VIEW_RESET });
      dispatch({ type: QUIZ_QUESTION_VIEW_RESET });
    }

    if (deleteSuccess) {
      navigate(`/admin/courses/${params.slug}/quiz/${params.quizSlug}`);
      dispatch({ type: QUIZ_VIEW_RESET });
      dispatch({ type: QUIZ_QUESTION_VIEW_RESET });
      dispatch({ type: QUIZ_QUESTION_DELETE_RESET });
    }
    if (!originalQuestion || originalQuestion._id != params.questionId) {
      dispatch(
        viewQuizQuestion(params.slug, params.quizSlug, params.questionId)
      );
    }

    if (originalQuestion) {
      setQuestion(originalQuestion.question);
      setAnswer(originalQuestion.answer);
      setExplanation(originalQuestion.explanation);
      for (let i = 0; i < choices.length; i++) {
        if (choices[i].value === "a") {
          setChoice1(choices[i].text);
          setPreview1(choices[i].image && choices[i].image.Location);
          setImage1(choices[i].image);
        }
        if (choices[i].value === "b") {
          setChoice2(choices[i].text);
          setPreview2(choices[i].image && choices[i].image.Location);
          setImage2(choices[i].image);
        }
        if (choices[i].value === "c") {
          setChoice3(choices[i].text);
          setPreview3(choices[i].image && choices[i].image.Location);
          setImage3(choices[i].image);
        }
        if (choices[i].value === "d") {
          setChoice4(choices[i].text);
          setPreview4(choices[i].image && choices[i].image.Location);
          setImage4(choices[i].image);
        }
      }
      setImage(originalQuestion.image && originalQuestion.image);
      setPreview(originalQuestion.image && originalQuestion.image.Location);
    }
  }, [originalQuestion, params, success, deleteSuccess, open]);

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
        key="1"
        color={neural500}
      >
        {unslugify(params.slug)}
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${params.slug}/quiz`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        {unslugify(params.quizSlug)}
      </Typography>
      <Typography
        as={Link}
        to={`/admin/courses/${params.slug}/quiz/${params.quizSlug}`}
        sx={{
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
        key="1"
        color={neural500}
      >
        Edit Quiz
      </Typography>
      <Typography
        style={{ textDecoration: "none" }}
        underline="none"
        key="1"
        color={neural500}
      >
        Edit Quiz Question
      </Typography>
    </Breadcrumbs>
  );

  return (
    <>
      {(loading || editLoading) && (
        <Div>
          <Loader />
        </Div>
      )}
      {!loading && !editLoading && (
        <>
          <Div style={{ backgroundColor: white }}>
            {breadcrumb}
            <Grid
              container
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item>
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
                  Edit Quiz Question
                </Typography>
                <Typography
                  variant="h3"
                  fontFamily="Poppins"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    fontStyle: "normal",
                    color: neural700,
                  }}
                >
                  {unslugify(params.quizSlug)}
                </Typography>
              </Grid>

              <Grid item>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: purplishBlueDark,
                    py: 1,
                    borderRadius: 2,
                    textTransform: "capitalize",
                    fontSize: 12,
                    fontWeight: 600,
                    borderColor: activeBorderBlueButton,
                    backgroundColor: white,
                    ":hover": {
                      borderColor: hoverBorderBlueButton,
                    },
                    ":focus": {
                      bgcolor: pressedBorderBackgroundBlueButton,
                      borderColor: pressedBorderBlueButton,
                    },
                  }}
                  onClick={handleDelete}
                >
                  Delete Question
                </Button>
              </Grid>
            </Grid>
          </Div>

          <Div>
            <QuizQuestionForm
              question={question}
              setQuestion={setQuestion}
              handleSubmit={handleSubmit}
              choice1={choice1}
              setChoice1={setChoice1}
              choice2={choice2}
              setChoice2={setChoice2}
              choice3={choice3}
              setChoice3={setChoice3}
              choice4={choice4}
              setChoice4={setChoice4}
              answer={answer}
              setAnswer={setAnswer}
              explanation={explanation}
              setExplanation={setExplanation}
              preview={preview}
              handleImage={handleImage}
              handleImageRemove={handleImageRemove}
              handleImage1={handleImage1}
              handleImage1Remove={handleImage1Remove}
              handleImage2={handleImage2}
              handleImage2Remove={handleImage2Remove}
              handleImage3={handleImage3}
              handleImage3Remove={handleImage3Remove}
              handleImage4={handleImage4}
              handleImage4Remove={handleImage4Remove}
              preview1={preview1}
              preview2={preview2}
              preview3={preview3}
              preview4={preview4}
              pending={pending}
              imageLoading={imageLoading}
              imageDeleteLoading={imageDeleteLoading}
              handleCancel={handleCancel}
              edit={true}
            />
          </Div>
        </>
      )}
    </>
  );
}

export default EditQuizQuestionScreen;
