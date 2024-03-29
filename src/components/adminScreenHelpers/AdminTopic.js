import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, Tooltip } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { fontType } from "../../design/font";
import {
  activeBlueButton,
  activeLightBlueButton,
  activeRedButton,
  hoverBlueButton,
  hoverLightBlueButton,
  hoverRedButton,
  neural900,
  orangeLight,
  pressedBlueButton,
  pressedLightBlueButton,
  pressedRedButton,
  purplishBlue,
  purplishBlueLight,
  red,
  white,
} from "../../design/color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';


export default function AdminTopic({ topic, handleEdit, handleDelete, handleView }) {

  return (
    <>
      {/* Topic card for Webpage */}
      <Card
        sx={{
          display: "flex",
          borderRadius: "10px",
          mb: "16px",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 64, mx: 2, height: 64 }}
          image={topic && topic.image && topic.image.Location}
        />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            minHeight: "100px",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Typography
                component="div"
                variant="h5"
                fontFamily={fontType}
                fontWeight={700}
                color={neural900}
                fontSize="18px"
              >
                {topic.title}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <Typography
                component="div"
                variant="h5"
                fontFamily={fontType}
                fontWeight={700}
                color={neural900}
                fontSize="14px"
              >
                {topic.title}
              </Typography>
            </Box>
          </CardContent>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
              mr: 0.5,
            }}
          >
            <Box
              sx={{
                ":hover": { cursor: "pointer" },
                mr: 0.5,
              }}
              onClick={() => handleView(topic.slug)}
            >
              <Tooltip title="View Topic">
                <PlayCircleOutlineOutlinedIcon
                  fontSize="small"
                  style={{ color: neural900 }}
                />
              </Tooltip>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}></Box>

            <Box
              sx={{
                ":hover": { cursor: "pointer" },
                mr: 0.5,
              }}
              onClick={() => handleEdit(topic._id)}
            >
              <Tooltip title="Edit Topic">
                <EditOutlinedIcon
                  fontSize="small"
                  style={{ color: purplishBlue }}
                />
              </Tooltip>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}></Box>
            <Box
              sx={{
                ":hover": { cursor: "pointer" },
                mr: 0.5,
              }}
              onClick={() => handleDelete(topic._id)}
            >
              <Tooltip title="Delete Topic">
                <DeleteOutlineIcon fontSize="small" style={{ color: red }} />
              </Tooltip>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" }, mr: 2 }}></Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
