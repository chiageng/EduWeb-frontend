import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { fontType } from "../../design/font";
import {
  green,
  neural500,
  neural900,
  orangeLight,
  purplishBlueLight,
  white,
} from "../../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QuizQuestionCard({question}) {
  const params = useParams();

  return (
    <>
      {/* Quiz card for Webpage */}
      <Card
        sx={{
          display: { xs: "none", md: "flex" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: 'none',
          color: neural900,
          mb: "16px",
          ':hover': {
            cursor: 'pointer'
          }
        }}
        as={Link}
        to={`/mycourses/${params.slug}/myquiz/${params.quizSlug}/instructor/${question._id}/edit`}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={500}
              color={neural900}
              fontSize="18px"
              mt={1}
            >
              {question.question}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* Quiz Card for phone  */}
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: 'none',
          color: neural900,
          mb: "4px",
          ':hover': {
            cursor: 'pointer'
          }
        }}
        as={Link}
        to={`/mycourses/${params.slug}/myquiz/${params.quizSlug}/instructor/${question._id}/edit`}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={500}
              color={neural900}
              fontSize="18px"
              mt={0}
            >
              {question.question}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
