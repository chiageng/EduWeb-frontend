import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  purplishBlue,
  purplishBluePale,
  hotPink,
  hotPinkPale,
  skyBlue,
  skyBlueLight,
} from "../design/color";

function Progress({ progress, color }) {
  const colors = [purplishBlue, hotPink, skyBlue];
  const backgroundColors = [purplishBluePale, hotPinkPale, skyBlueLight];
  const useColor = colors[color];
  const backgroundColor = backgroundColors[color];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={Number(progress)}
            sx={{
              backgroundColor:backgroundColor,
              "& .MuiLinearProgress-bar": {
                backgroundColor: useColor,
              },
            }}
          />
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ width: "100%", mt: 1 }}
      >
        Completed : <strong>{Math.round(progress)}%</strong>
      </Typography>
    </>
  );
}

export default Progress;
