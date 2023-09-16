import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { neural500, neural900, purplishBlue, red } from "../../design/color";
import { fontType } from "../../design/font";
import { Grid, Tooltip } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function QuizDisplayQuestion({ currentQuestion, questions, admin, handleEdit, handleDelete }) {
  return (
    <>
      <Grid container display="flex" justifyContent="space-between">
        <Grid item>
          <Typography
            variant="h3"
            fontFamily={fontType}
            sx={{
              fontSize: 14,
              fontWeight: 400,
              fontStyle: "normal",
              color: neural500,
              mb: "8px",
            }}
          >
            Question {currentQuestion + 1} / {questions && questions.length}
          </Typography>
        </Grid>

        {admin && (
          <Grid item>
            <Grid container display="flex">
              <Grid
                item
                mr={1}
                sx={{
                  ":hover": { cursor: "pointer" },
                  mr: 0.5,
                }}
                onClick={() => handleEdit(questions[currentQuestion].question._id)}
              >
                <Tooltip title="Edit Question">
                <EditOutlinedIcon
                  fontSize="small"
                  style={{ color: purplishBlue }}
                />
              </Tooltip>
              </Grid>
              <Grid item sx={{
                ":hover": { cursor: "pointer" },
              }}
              onClick={() => handleDelete(questions[currentQuestion].question._id)}>
                 <Tooltip title="Delete Question">
                <DeleteOutlineOutlinedIcon fontSize="small" style={{ color: red }} />
              </Tooltip>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>

      <Typography
        variant="h3"
        fontFamily={fontType}
        sx={{
          fontSize: 16,
          fontWeight: 600,
          fontStyle: "normal",
          color: neural900,
          mb: "32px",
        }}
      >
        {questions[currentQuestion].question.question}
      </Typography>

      {/* If got image */}
      {questions[currentQuestion].question.image && (
        <Box mb={1}>
          <img
            style={{ minHeight: "200px", objectFit: "contain" }}
            src={questions[currentQuestion].question.image.Location}
          ></img>
        </Box>
      )}
    </>
  );
}

export default QuizDisplayQuestion;
