import React from "react";
import { Typography, TextField, Grid, Card, Button } from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
} from "../../design/color";
import { fontType } from "../../design/font";
function QuizForm({
  setTitle,
  title,
  handleSubmit
}) {

  return (
    <Grid container>
      <Grid item xs={0} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Grid container spacing={3} m={1} width="90%">
            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 16,
                  color: neural500,
                }}
              >
                Quiz Title
              </Typography>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                  },
                }}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                id="TopicTitle"
                name="topicTitle"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={8} sm={10}></Grid>
            <Grid item xs={4} sm={2} pb={2}>
              <Button
                sx={{
                  mr: 2,
                  color: neural900,
                  display: "block",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "140%",
                  backgroundColor: purplishBlue,
                  color: white,
                  ":hover": {
                    backgroundColor: purplishBlueDark,
                  },
                  ":disabled": {
                    backgroundColor: neural500,
                    color: white,
                  }
                  
                }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default QuizForm;
