import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Card,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
} from "../../design/color";
import { fontType } from "../../design/font";
function ReviewForm({
  setComment,
  comment,
  rate,
  setRate,
  handleSubmit,
  handleClose,
}) {
  return (
    <Grid container pl={2}>
      <Grid item xs={0} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Card pl={2}>
          <Grid container spacing={3} m={1} width="90%" ml={3}>
            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 28,
                  color: neural900,
                  mb: 2,
                }}
              >
                Write A Review
              </Typography>

              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Rating
              </Typography>
              <Select
                id="rating"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                autoWidth
                size="small"
                sx={{
                  minWidth: "200px",
                  backgroundColor: purplishBluePale,
                  fontSize: 14,
                  mb: 4,
                }}
              >
                <MenuItem value="0"> - </MenuItem>
                <MenuItem value="1">1 - Poor</MenuItem>
                <MenuItem value="2">2 - Fair </MenuItem>
                <MenuItem value="3">3 - Good </MenuItem>
                <MenuItem value="4">4 - Very Good </MenuItem>
                <MenuItem value="5">5 - Excellent </MenuItem>
              </Select>

              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Review
              </Typography>
              <TextField
                inputProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: purplishBluePale,
                    color: purplishBlueDark,
                  },
                }}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                required
                id="comment"
                name="comment"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid container display="flex" justifyContent="space-between" mt={4} mb={4}>
              <Grid item></Grid>
              <Grid item>
                <Grid container display="flex">
                  <Grid item>
                    <Button
                      sx={{
                        mr: 2,
                        color: neural900,
                        display: "block",
                        fontSize: 16,
                        fontWeight: 400,
                        lineHeight: "140%",
                        px: 2,
                        py: 1.5,
                        backgroundColor: purplishBlue,
                        color: white,
                        ":hover": {
                          backgroundColor: purplishBlueDark,
                        },
                        ":disabled": {
                          backgroundColor: neural500,
                          color: white,
                        },
                      }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{
                        mr: 2,
                        color: neural900,
                        display: "block",
                        fontSize: 16,
                        fontWeight: 400,
                        px: 2,
                        py: 1.5,
                        lineHeight: "140%",
                        backgroundColor: purplishBlue,
                        color: white,
                        ":hover": {
                          backgroundColor: purplishBlueDark,
                        },
                        ":disabled": {
                          backgroundColor: neural500,
                          color: white,
                        },
                      }}
                      onClick={handleSubmit}
                    >
                      Submit Review
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default ReviewForm;
