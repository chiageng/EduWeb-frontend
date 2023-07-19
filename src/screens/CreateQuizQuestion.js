import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import { Container, Box, Typography, Button,Grid } from "@mui/material";
import { neural900, red, white, } from "../design/color";
import { createQuizQuestion } from "../actions/quizAction";
import {
  QUIZZES_VIEW_RESET,
  QUIZ_QUESTION_CREATE_RESET,
  QUIZ_VIEW_RESET,
} from "../constants/quiz";
import QuizQuestionForm from "../components/forms/QuizQuestionForm";
import { deleteImage, uploadImage } from "../actions/uploadActions";
import Loader from "../components/universal/Loader";

function CreateQuizQuestionScreen() {
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [answer, setAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [preview, setPreview] = useState("");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false)
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

  const quizQuestionCreate = useSelector((state) => state.quizQuestionCreate);
  const { loading, success, error } = quizQuestionCreate;

  const imageUpload = useSelector(state => state.imageUpload);
  const { loading: imageLoading, image:data, error:imageError} = imageUpload;

  const imageDelete = useSelector(state => state.imageDelete);
  const {loading: imageDeleteLoading, success:deleteImageSuccess, error: deleteImageError} = imageDelete;

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
      createQuizQuestion({
        slug: params.slug,
        quizSlug: params.quizSlug,
        choices,
        answer,
        question,
        explanation,
        image,
      })
    );
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

  // const handleImage1Remove = async () => {
  //   try {
  //     setPending(true);
  //     const res = await axios.post("/api/course/remove-image", { image: image1 });
  //     setImage1();
  //     setPreview1("");
  //     setPending(false);
  //   } catch (error) {
  //     console.log("Error when delete image");
  //   }
  // };

  // const handleImage1 = (e) => {
  //   let file = e.target.files[0];
  //   setPreview1(window.URL.createObjectURL(file));

  //   // resize image before send to s3
  //   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
  //     try {
  //       setPending(true);
  //       let { data } = await axios.post("/api/course/upload-image", {
  //         image: uri,
  //       });

  //       // set image in the state
  //       setImage1(data);
  //       setPending(false);
  //     } catch (error) {}
  //   });
  // };

  // const handleImage2Remove = async () => {
  //   try {
  //     setPending(true);
  //     const res = await axios.post("/api/course/remove-image", { image: image2 });
  //     setImage2();
  //     setPreview2("");
  //     setPending(false);
  //   } catch (error) {
  //     console.log("Error when delete image");
  //   }
  // };

  // const handleImage2 = (e) => {
  //   let file = e.target.files[0];
  //   setPreview2(window.URL.createObjectURL(file));

  //   // resize image before send to s3
  //   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
  //     try {
  //       setPending(true);
  //       let { data } = await axios.post("/api/course/upload-image", {
  //         image: uri,
  //       });

  //       // set image in the state
  //       setImage2(data);
  //       setPending(false);
  //     } catch (error) {}
  //   });
  // };

  // const handleImage3Remove = async () => {
  //   try {
  //     setPending(true);
  //     const res = await axios.post("/api/course/remove-image", { image: image3 });
  //     setImage3();
  //     setPreview3("");
  //     setPending(false);
  //   } catch (error) {
  //     console.log("Error when delete image");
  //   }
  // };

  // const handleImage3 = (e) => {
  //   let file = e.target.files[0];
  //   setPreview3(window.URL.createObjectURL(file));

  //   // resize image before send to s3
  //   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
  //     try {
  //       setPending(true);
  //       let { data } = await axios.post("/api/course/upload-image", {
  //         image: uri,
  //       });

  //       // set image in the state
  //       setImage3(data);
  //       setPending(false);
  //     } catch (error) {}
  //   });
  // };

  // const handleImage4Remove = async () => {
  //   try {
  //     setPending(true);
  //     const res = await axios.post("/api/course/remove-image", { image: image4 });
  //     setImage4();
  //     setPreview4("");
  //     setPending(false);
  //   } catch (error) {
  //     console.log("Error when delete image");
  //   }
  // };

  // const handleImage4 = (e) => {
  //   let file = e.target.files[0];
  //   setPreview4(window.URL.createObjectURL(file));

  //   // resize image before send to s3
  //   Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
  //     try {
  //       setPending(true);
  //       let { data } = await axios.post("/api/course/upload-image", {
  //         image: uri,
  //       });

  //       // set image in the state
  //       setImage4(data);
  //       setPending(false);
  //     } catch (error) {}
  //   });
  // };

  useEffect(() => {
    if (success) {
      dispatch({ type: QUIZ_VIEW_RESET });
      dispatch({ type: QUIZ_QUESTION_CREATE_RESET });
      navigate(
        `/mycourses/${params.slug}/myquiz/${params.quizSlug}/instructor`
      );
    }
  }, [success]);

  return (
    <Container>
     {loading && <Loader/>}
     {!loading && <Box pt={5} pb={10}>
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
          Create Quiz Question
        </Typography>
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
          preview={preview}
          pending={pending}
          imageLoading={imageLoading}
          imageDeleteLoading={imageDeleteLoading}
        />
      </Box>}
    </Container>
  );
}

export default CreateQuizQuestionScreen;
