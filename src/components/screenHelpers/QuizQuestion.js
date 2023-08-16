import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { green, neural900, red, white } from "../../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function QuizQuestion({
  selections,
  onClick,
  chosenAnswer,
  correctAnswer,
}) {
  if (chosenAnswer) {
    return (
      <>
        {/* Quiz question after submission for Webpage */}
        <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={chosenAnswer}
              name="radio-buttons-group"
              sx={{
                width: "100%",
              }}
            >
          <Grid container spacing={0} display="flex" justifyContent="space-between">
              {selections &&
                selections.map((selection) => (
                  <Grid item key={selection._id} mb={2} xs={12} md={5.8}>
                    <Card
                      sx={{
                        display: "flex",
                        height: "100%",
                        backgroundColor:
                          correctAnswer === selection.value
                            ? green
                            : chosenAnswer === selection.value &&
                              chosenAnswer !== correctAnswer
                            ? red
                            : white,
                        color: correctAnswer === selection ? white : neural900,
                      }}
                    >
                      <CardContent>
                        <Grid container display="flex" direction="column">
                          <Grid item>
                            <FormControlLabel
                              value="disabled"
                              label={selection.text}
                              disabled
                              control={
                                <Radio
                                  sx={{
                                    color:
                                      correctAnswer === selection.value
                                        ? white
                                        : neural900,
                                    "&.Mui-checked": {
                                      color:
                                        correctAnswer === selection.value
                                          ? white
                                          : neural900,
                                    },
                                  }}
                                  icon={
                                    correctAnswer === selection.value ? (
                                      <CheckCircleIcon
                                        style={{ color: white }}
                                      />
                                    ) : chosenAnswer === selection.value &&
                                      chosenAnswer !== correctAnswer ? (
                                      <CancelIcon style={{ color: white }} />
                                    ) : (
                                      <RadioButtonUncheckedIcon />
                                    )
                                  }
                                />
                              }
                            ></FormControlLabel>
                          </Grid>
                          <Grid item ml={5}>
                            {selection.image && (
                              <img style={{ maxWidth:"100%" , objectFit: "contain"}} src={selection.image.Location}></img>
                            )}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
          </Grid>
            </RadioGroup>
        </FormControl>
      </>
    );
  }

  return (
    <>
      {/* Quiz question before submission for Webpage */}
      <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              width: "100%",
            }}
          >
        <Grid container spacing={0} display="flex" justifyContent="space-between">
            {selections &&
              selections.map((selection) => (
                <Grid key={selection._id} item mb={2} xs={12} md={5.8}>
                  <Card
                    sx={{
                      display: "flex",
                      height: "100%",
                      backgroundColor:
                        correctAnswer === selection.value
                          ? green
                          : chosenAnswer === selection.value &&
                            chosenAnswer !== correctAnswer
                          ? red
                          : white,
                      color:
                        correctAnswer === selection.value ? white : neural900,
                    }}
                  >
                    <CardContent>
                      <Grid container display="flex" direction="column">
                        <Grid item>
                          <FormControlLabel
                            value={selection.value}
                            label={selection.text}
                            onClick={onClick}
                            control={
                              <Radio
                                sx={{
                                  color:
                                    correctAnswer === selection.value
                                      ? white
                                      : neural900,
                                  "&.Mui-checked": {
                                    color:
                                      correctAnswer === selection.value
                                        ? white
                                        : neural900,
                                  },
                                }}
                              />
                            }
                          ></FormControlLabel>
                        </Grid>
                        <Grid item>
                          {selection.image && (
                            <img style={{ maxWidth:"100%" , objectFit: "contain"}} src={selection.image.Location}></img>
                          )}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>
          </RadioGroup>
      </FormControl>
    </>
  );
}
