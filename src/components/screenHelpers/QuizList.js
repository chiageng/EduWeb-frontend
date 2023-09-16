import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid, Box, Typography } from "@mui/material";
import {
  green,
  neural500,
  neural700,
  neural900,
  purplishBlue,
  purplishBluePale,
} from "../../design/color";
import { fontType } from "../../design/font";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loader from "../universal/Loader";

function QuizList({ instructor, quizzes, isStaff, loading, admin }) {
  const navigate = useNavigate();
  const params = useParams();


  const output =
    quizzes &&
    quizzes.map((item) => (
      <CardContent sx={{ py: "8px" }} key={item.quiz._id}>
        <Button
          onClick={() =>
            admin
              ? navigate(
                  `/admin/courses/${params.slug}/quiz/${item.quiz.slug}`
                )
              : navigate(`/mycourses/${params.slug}/myquiz/${item.quiz.slug}`)
          }
          style={{ textAlign: "left" }}
          sx={{
            p: 0,
            pr: 1,
            width: "95%",
            minHeight: "80px",
            ":hover": { backgroundColor: purplishBluePale },
          }}
          endIcon={item.done && <CheckCircleIcon sx={{color: green}}/>}
        >
          <Grid container>
            <Grid item xs={12} sm={1}></Grid>
            <Grid item xs={12} sm={10}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: fontType,
                  fontWeight: 600,
                  color: neural700,
                }}
              >
                {item.quiz.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: fontType,
                  fontWeight: 400,
                  color: neural500,
                }}
              >
                {instructor && instructor}
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </CardContent>
    ));

  return (
    <Card
      sx={{
        display: { xs: "none", md: "block" },
        borderRadius: "10px",
        mb: "16px",
        width: "430px",
        height: "430px",
      }}
    >
      {loading && <Loader/>}
      {!loading && <><CardContent sx={{ pb: "8px" }}>
        <Typography
          component="div"
          variant="h5"
          fontFamily={fontType}
          fontWeight={700}
          color={neural900}
          fontSize="18px"
        >
          Quiz List
        </Typography>
      </CardContent>
      <Box
        sx={{
          overflowY: "scroll",
          height: "400px",
          "&:hover::-webkit-scrollbar": {
            display: "block",
          },
          "&::-webkit-scrollbar": {
            display: "block",
            width: "0.512rem",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px ${purplishBluePale}`,
            webkitBoxShadow: `inset 0 0 6px ${purplishBluePale}`,
            backgroundColor: purplishBluePale,
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: purplishBlue,
            borderRadius: "8px",
          },
        }}
      >
        {output}
      </Box></>}
    </Card>
  );
}

export default QuizList;
