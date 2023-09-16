import {
  Typography,
  TextField,
  Grid,
  Card,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import React from "react";
import {
  neural900,
  neural500,
  white,
  purplishBlueDark,
  purplishBluePale,
  purplishBlue,
  red,
  hoverBlueButton,
  pressedBlueButton,
  activeBlueButton,
  pressedBorderBlueButton,
  pressedBorderBackgroundBlueButton,
  hoverBorderBlueButton,
  activeBorderBlueButton,
  hoverRedButton,
  pressedRedButton,
} from "../../design/color";
import { fontType } from "../../design/font";
import Loader from "../universal/Loader";
import { useNavigate, useParams } from "react-router-dom";

function QuizForm({
  setTitle,
  title,
  handleSubmit,
  update,
}) {
  const navigate = useNavigate();
  const params = useParams()

  return (
    <Card>
          <Grid container spacing={3} m={1} width="95%">
            <Grid item xs={12} pb={2}>
              <Typography
                sx={{
                  fontFamily: fontType,
                  fontWeight: 600,
                  fontSize: 14,
                  color: neural500,
                }}
              >
                Quiz Title*
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
                id="quizTitle"
                name="quizTitle"
                fullWidth
                size="small"
              />
            </Grid>

            {/* Button */}
            <Grid container justifyContent="center" display="flex" pb={4}>
              <Grid item xs={12} sm={2} mt={1.5}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{
                    color: purplishBlueDark,
                    py: 1,
                    borderRadius: 2,
                    textTransform: "capitalize",
                    fontSize: 12,
                    fontWeight: 600,
                    borderColor: activeBorderBlueButton,
                    backgroundColor: white,
                    ":hover": {
                      borderColor: hoverBorderBlueButton,
                    },
                    ":focus": {
                      bgcolor: pressedBorderBackgroundBlueButton,
                      borderColor: pressedBorderBlueButton,
                    },
                  }}
                  onClick={() => navigate(`/admin/courses/${params.slug}/quiz`)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item sm={0.25} xs={false} mt={1}></Grid>
              <Grid item xs={12} sm={2} mt={1.5}>
                <Button
                  type="submit"
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    backgroundColor: activeBlueButton,
                    fontFamily: fontType,
                    fontWeight: 400,
                    fontSize: 12,
                    borderRadius: 2,
                    py: 1,
                    textTransform: "capitalize",
                    ":hover": { backgroundColor: hoverBlueButton },
                    ":focus": { backgroundColor: pressedBlueButton },
                  }}
                >
                  {update ? "Update Quiz" : "Create Quiz"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
  );
}

export default QuizForm;
