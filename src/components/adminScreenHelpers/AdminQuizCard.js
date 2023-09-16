import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Tooltip } from "@mui/material";
import { fontType } from "../../design/font";
import {
  green,
  neural200,
  neural900,
  purplishBlue,
  purplishBlueLight,
  red,
  white,
} from "../../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import PublishOutlinedIcon from "@mui/icons-material/PublishOutlined";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function AdminQuizCard({
  quiz,
  is_staff,
  score,
  done,
  published,
  handleEdit,
  handleDelete,
  handleView,
}) {
  const params = useParams();

  return (
    <Box width="100%">
      {/* Quiz card for Webpage */}
      <Card
        sx={{
          display: "flex",
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: "none",
          color: neural900,
          mb: "16px",
          width: "100%",
          // height: "100px"
          ".MuiCardContent-root:last-child": { p: 1.5 },
        }}
      >
        <Box width="100%">
          <CardContent>
            <Grid container direction="column">
              <Grid item width="100%">
                <Grid container display="flex" justifyContent="space-between">
                  <Grid item>
                    <Typography
                      component="div"
                      variant="h5"
                      fontFamily={fontType}
                      fontWeight={600}
                      color={neural900}
                      fontSize="14px"
                      backgroundColor={purplishBlueLight}
                      p={1}
                      width="100px"
                    >
                      Obj Question
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    sx={{
                      fontFamily: fontType,
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {done && !is_staff && (
                      <Grid container>
                        <Grid item>
                          <CheckCircleIcon
                            sx={{ color: green, fontSize: "22px" }}
                          />
                        </Grid>
                        <Grid item>
                          {score}/{quiz.questions.length}
                        </Grid>
                      </Grid>
                    )}

                    {published && (
                      <Grid container>
                        <Grid item>
                          <PublishOutlinedIcon
                            sx={{ color: green, fontSize: "22px" }}
                          />
                        </Grid>
                        <Grid item sx={{ color: green }}>
                          published
                        </Grid>
                      </Grid>
                    )}

                    {!published && (
                      <Grid container>
                        <Grid item>
                          <UnpublishedOutlinedIcon
                            sx={{ color: neural200, fontSize: "22px" }}
                          />
                        </Grid>
                        <Grid item sx={{ color: neural200 }}>
                          unpublished
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item width="100%">
                <Grid container display="flex" justifyContent="space-between">
                  <Grid item>
                    <Typography
                      component="div"
                      variant="h5"
                      fontFamily={fontType}
                      fontWeight={500}
                      color={neural900}
                      fontSize="18px"
                      mt={1}
                      width="100%"
                    >
                      {quiz.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container display="flex">
                    <Grid
                        item
                        mr={1}
                        mt={1}
                        sx={{ ":hover": { cursor: "pointer" } }}
                        onClick={() => handleView(quiz.slug)}
                      >
                        <Tooltip title="View Quiz">
                          <VisibilityOutlinedIcon style={{ color: neural900 }} />
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        mr={1}
                        mt={1}
                        sx={{ ":hover": { cursor: "pointer" } }}
                        onClick={() => handleEdit(quiz.slug)}
                      >
                        <Tooltip title="Edit Quiz">
                          <EditOutlinedIcon style={{ color: purplishBlue }} />
                        </Tooltip>
                      </Grid>
                      <Grid
                        item
                        mr={1}
                        mt={1}
                        sx={{ ":hover": { cursor: "pointer" } }}
                        onClick={() => handleDelete(quiz.published, quiz.slug)}
                      >
                        <Tooltip title="Delete Quiz">
                          <DeleteOutlineOutlinedIcon style={{ color: red }} />
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>

      {/* Design for phone */}
      {/* <Card
        sx={{
          display: { xs: "flex", md: "none" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: "none",
          color: neural900,
          ":hover": {
            cursor: "pointer",
          },
          width: "100%",
        }}
      >
        <Box width="100%">
          <CardContent py={1}>
            <Grid container display="flex" alignItems="center">
              <Grid item xs={11.5}>
                <Typography
                  component="div"
                  variant="h5"
                  fontFamily={fontType}
                  fontWeight={500}
                  color={neural900}
                  fontSize="18px"
                  width="100%"
                  mt={1}
                >
                  {quiz.title}
                </Typography>
              </Grid>

              <Grid
                xs={0.5}
                item
                mt={1}
                sx={{
                  fontFamily: fontType,
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {done && !is_staff && (
                  <CheckCircleIcon sx={{ color: green, fontSize: "22px" }} />
                )}
                {!done && !is_staff && (
                  <PendingActionsOutlinedIcon
                    sx={{ color: neural200, fontSize: "22px" }}
                  />
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card> */}
    </Box>
  );
}
