import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { fontType } from "../../design/font";
import { green, neural900, purplishBlueLight, white } from "../../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QuizCard({ quiz, is_staff, score, done }) {
  const params = useParams();

  let navigation = `/mycourses/${params.slug}/myquiz/${quiz.slug}`;

  if (is_staff) {
    navigation = `/mycourses/${params.slug}/myquiz/${quiz.slug}/instructor`;
  }

  return (
    <Box width="100%">
      {/* Quiz card for Webpage */}
      <Card
        sx={{
          display: { xs: "none", md: "flex" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: "none",
          color: neural900,
          mb: "16px",
          ":hover": {
            cursor: "pointer",
          },
          width: "100%",
        }}
        as={Link}
        to={navigation}
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
                    {done && <Grid container>
                      <Grid item>
                        <CheckCircleIcon
                          sx={{ color: green, fontSize: "22px" }}
                        />
                      </Grid>
                      <Grid item>
                        {score}/{quiz.questions.length}
                      </Grid>
                    </Grid>}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item width="100%">
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
            </Grid>
          </CardContent>
        </Box>
      </Card>

      {/* Design for phone */}
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: "none",
          color: neural900,
          mb: "16px",
          ":hover": {
            cursor: "pointer",
          },
          width: "100%",
        }}
        as={Link}
        to={navigation}
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
                    {done && <Grid container>
                      <Grid item>
                        <CheckCircleIcon
                          sx={{ color: green, fontSize: "22px" }}
                        />
                      </Grid>
                      <Grid item>
                        {score}/{quiz.questions.length}
                      </Grid>
                    </Grid>}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item width="100%">
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
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
