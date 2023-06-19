import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  green,
  neural900,

  red,
  white,
} from "../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function QuizQuestion({
  selections,
  onClick,
  chosenAnswer,
  correctAnswer,
}) {

  if (chosenAnswer) {
    return(
    <>
      {/* Quiz question after submission for Webpage */}
      <FormControl sx={{ width: "100%" }}>
        <Grid container spacing={0}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={chosenAnswer}
            name="radio-buttons-group"
            sx={{
              width: "90%",
            }}
          >
            {selections.map((selection) => (
              <Grid key={selection} item mb={2}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor:
                      correctAnswer === selection
                        ? green
                        : chosenAnswer === selection &&
                          chosenAnswer !== correctAnswer
                        ? red
                        : white,
                    color: correctAnswer === selection ? white : neural900,
                  }}
                >
                  <CardContent>
                    <FormControlLabel
                      value="disabled"
                      label={selection}
                      disabled
                      control={
                        <Radio
                          sx={{
                            color:
                              correctAnswer === selection ? white : neural900,
                            "&.Mui-checked": {
                              color:
                                correctAnswer === selection ? white : neural900,
                            },
                          }}
                          icon={correctAnswer === selection 
                            ? <CheckCircleIcon style={{ color:white }}/>
                            : chosenAnswer === selection && chosenAnswer !== correctAnswer ? <CancelIcon style={{ color:white }}/>
                            : <RadioButtonUncheckedIcon/>}
                        />
                      }
                    ></FormControlLabel>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </RadioGroup>
        </Grid>
      </FormControl>
    </>)
  }

  return (
    <>
      {/* Quiz question before submission for Webpage */}
      <FormControl sx={{ width: "100%" }}>
        <Grid container spacing={0}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              width: "90%",
            }}
          >
            {selections.map((selection) => (
              <Grid key={selection} item mb={2}>
                <Card
                  sx={{
                    display: "flex",
                    backgroundColor:
                      correctAnswer === selection
                        ? green
                        : chosenAnswer === selection &&
                          chosenAnswer !== correctAnswer
                        ? red
                        : white,
                    color: correctAnswer === selection ? white : neural900,
                  }}
                >
                  <CardContent>
                    <FormControlLabel
                      value={selection}
                      label={selection}
                      onClick={onClick}
                      control={
                        <Radio
                          sx={{
                            color:
                              correctAnswer === selection ? white : neural900,
                            "&.Mui-checked": {
                              color:
                                correctAnswer === selection ? white : neural900,
                            },
                            
                          }}
                         
                        />
                      }
                    ></FormControlLabel>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </RadioGroup>
        </Grid>
      </FormControl>
    </>
  );
}
