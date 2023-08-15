import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { fontType } from "../../design/font";
import {
  green,
  neural500,
  neural700,
  neural900,
  purplishBluePale,
} from "../../design/color";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Loader from "../universal/Loader";

export default function PhoneQuizList({ instructor, isStaff, quizzes, loading, }) {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => () => {
    setState(open);
  };

  const navigate = useNavigate();
  const params = useParams();

  const output= quizzes && quizzes.map(item => (
    <ListItem sx={{ py: "8px" }} key={item.quiz._id}>
      <Button
        onClick={() =>
          isStaff
            ? navigate(
                `/mycourses/${params.slug}/myquiz/${item.quiz.slug}/instructor`
              )
            : navigate(`/mycourses/${params.slug}/myquiz/${item.quiz.slug}`)
        }
        style={{ textAlign: "left" }}
        sx={{
          p: 0,
          pr: 2,
          width: "100%",
          height: "80px",
          ":hover": { backgroundColor: purplishBluePale },
        }}
        endIcon={item.done && <CheckCircleIcon sx={{color: green}}/>}
      >
        <Grid container>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={10} sm={10}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
              }}
            >
              {item.quiz.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: fontType,
                fontWeight: 400,
                color: neural500,
              }}
            >
              {instructor && instructor}
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </ListItem>
  ));

  const list = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {output}
      </List>
    </Box>
  );

  return (
    <React.Fragment key="bottom">
      <Card
        sx={{
          display: "flex",
          borderRadius: "5px",
          mb: "16px",
          width: "100%",
        }}
      >
        {loading && <Loader/>}
        {!loading && <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              fontFamily={fontType}
              fontWeight={900}
              color={neural900}
              fontSize="20px"
            >
              Quiz List
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            <Button onClick={toggleDrawer(true)}><ExpandMoreIcon /></Button>
            <Drawer
              anchor="bottom"
              open={state}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  height: "400px",
                },
              }}
            >
              {list}
            </Drawer>
          </Box>
        </Box>}
      </Card>
    </React.Fragment>
  );
}
