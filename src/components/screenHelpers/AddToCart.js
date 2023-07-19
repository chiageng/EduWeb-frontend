import React from "react";
import {
  Typography,
  Divider,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { fontType } from "../../design/font";
import { neural700, purplishBlue } from "../../design/color";

export default function AddToCart({price, onClick, enroll, image}) {
  return (
    <Card
      sx={{
        borderRadius: "5px",
        mb: "16px",
        width: "100%",
      }}
    >
      <CardMedia sx={{ height: 200 }} image={image} />
      <CardContent>
        <Typography
          color={neural700}
          fontSize="26px"
          fontWeight={600}
          fontFamily={fontType}
          component="div"
        >
          RM {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="submit"
          fullWidth
          onClick={onClick}
          variant="contained"
          sx={{
            backgroundColor: purplishBlue,
            fontFamily: fontType,
            fontWeight: 600,
            borderRadius: 3,
          }}
        >
          {enroll ? "View Course" : "Add To Cart"}
        </Button>
      </CardActions>
      <CardContent>
        <Divider flexItem />
        <Typography
          color={neural700}
          fontSize="16px"
          fontWeight={400}
          fontFamily={fontType}
          component="div"
          mt={2}
        >
          This course includes:
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleOutlineIcon fontSize="small" mb={1} />
            </ListItemIcon>
            <Typography
              color={neural700}
              fontSize="16px"
              fontWeight={400}
              fontFamily={fontType}
              component="div"
            >
              9 hours on demand videos
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleOutlineIcon fontSize="small" mb={1} />
            </ListItemIcon>
            <Typography
              color={neural700}
              fontSize="16px"
              fontWeight={400}
              fontFamily={fontType}
              component="div"
            >
              On site exercise questions
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleOutlineIcon fontSize="small" mb={1} />
            </ListItemIcon>
            <Typography
              color={neural700}
              fontSize="16px"
              fontWeight={400}
              fontFamily={fontType}
              component="div"
            >
              Interactive quizzes
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CheckCircleOutlineIcon fontSize="small" mb={1} />
            </ListItemIcon>
            <Typography
              color={neural700}
              fontSize="16px"
              fontWeight={400}
              fontFamily={fontType}
              component="div"
            >
              Access on mobile and pc
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
