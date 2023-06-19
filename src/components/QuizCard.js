import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { fontType } from "../design/font";
import {
  green,
  neural500,
  neural900,
  orangeLight,
  purplishBlueLight,
  white,
} from "../design/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function QuizCard({topic}) {
  const params = useParams();

  return (
    <>
      {/* Quiz card for Webpage */}
      <Card
        sx={{
          display: { xs: "none", md: "flex" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: 'none',
          color: neural900,
          mb: "16px",
          ':hover': {
            cursor: 'pointer'
          }
        }}
        as={Link}
        to={`/mycourses/${params.id}/myquiz/${topic._id}`}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={600}
              color={neural900}
              fontSize="14px"
              backgroundColor={purplishBlueLight}
              p={1}
            >
              Obj Question
            </Typography>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={500}
              color={neural900}
              fontSize="18px"
              mt={1}
            >
              1.1 Quiz Title
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Grid container>
              <Grid item md={8}></Grid>
              <Grid
                item
                md={4}
                mt={2}
                sx={{ fontFamily: fontType, fontSize: "14px", fontWeight: 600 }}
              >
                <Grid container>
                  <Grid item md={2}>
                    <CheckCircleIcon sx={{ color: green }} />
                  </Grid>
                  <Grid item  ml={2} md={2}>
                    14/40
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>

      {/* Quiz Card for phone  */}
      <Card
        sx={{
          display: { xs: "flex", md: "none" },
          mx: 0,
          borderRadius: "10px",
          backgroundColor: white,
          textDecoration: 'none',
          color: neural900,
          mb: "4px",
          ':hover': {
            cursor: 'pointer'
          }
        }}
        as={Link}
        to={`/mycourses/${params.id}/myquiz/${topic._id}`}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={500}
              color={neural900}
              fontSize="18px"
              mt={0}
            >
              1.1 Quiz Title
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Grid container>
              <Grid item xs={10}></Grid>
              <Grid
                item
                xs={2}
                mt={2}
                sx={{ fontFamily: fontType, fontSize: "14px", fontWeight: 600 }}
              >
                <CheckCircleIcon sx={{ color: green }} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    </>
  );
}
