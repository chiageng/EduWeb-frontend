import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card } from "@mui/material";
import { neural500, purplishBlueDark, purplishBluePale } from "../design/color";
import { fontType } from "../design/font";

export default function Form() {
  return (
    <Grid container>
      <Grid item xs={0} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Card>
          <Grid container spacing={3} m={1} width="90%">
            <Grid item xs={12} pb={2}>
              <Typography sx={{fontFamily: fontType, fontWeight: 600, fontSize: 16, color: neural500}}>Course Title</Typography>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                  },
                }}
                required
                id="CourseTitle"
                name="courseTitle"
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
