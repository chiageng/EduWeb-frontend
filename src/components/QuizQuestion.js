import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { fontType } from "../design/font";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import {
  green,
  greenLight,
  neural900,
  purplishBlue,
  purplishBlueLight,
  white,
} from "../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { pink } from "@mui/material/colors";

export default function QuizQuestion({ selections, onClick, chosenAnswer, correctAnswer }) {
  const currentUrl = window.location.href;

  return (
    <>
      {/* Quiz question for Webpage */}
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
        <Grid item mb={2}>
          <Card
            sx={{
              display: "flex",
              backgroundColor: correctAnswer === selection ? green 
                : chosenAnswer === selection && chosenAnswer !== correctAnswer ? pink[100] : white,
              color: correctAnswer === selection ? white : neural900 
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
                    color: correctAnswer === selection ? white : neural900 ,
                    "&.Mui-checked": {
                      color: correctAnswer === selection ? white : neural900 
                    },
                  }}/>}
              >
              </FormControlLabel>
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
