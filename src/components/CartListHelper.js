import React from "react";
import {
  Container,
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import { fontType } from "../design/font";
import {
  neural900,
  neural700,
  neural300,
  white,
  orangeLight,
  neural500,
} from "../design/color";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Image } from "@mui/icons-material";

function CartListHelper() {
  return (
    <>
      {/* Listing design for webpage */}
      <Box display={{ xs: "none", md: "block" }}>
        <Grid container>
          <Grid item xs={10}>
            <Grid container display="flex">
              <Grid item xs={3} mt={2} ml={2}>
                <Image width="160px" height="100px"></Image>
              </Grid>
              <Grid item xs={5} ml={1}>
                <Typography
                  component="div"
                  variant="h5"
                  fontFamily={fontType}
                  fontWeight={600}
                  color={neural900}
                  fontSize="16px"
                  my={2}
                  ml={1}
                >
                  Primary Science Course
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={400}
              color={neural900}
              fontSize="16px"
              my={2}
              ml={2}
            >
              RM 300.00
            </Typography>
          </Grid>
        </Grid>

        <Grid container display="flex">
          <Grid item xs={2.6}></Grid>
          <Grid item>
            <Button
              key="/delete"
              sx={{
                display: "block",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "140%",
                borderRadius: 10,
                fontFamily: fontType,
                backgroundColor: white,
                color: neural500,
                ":hover": { backgroundColor: white, color: neural900 },
              }}
            >
              <Grid container>
                <Grid item mt={0.5} px={2}>
                  Remove
                </Grid>
                <Grid item pr={2}>
                  <DeleteOutlineIcon />
                </Grid>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Listing design for phone */}
      <Box display={{ xs: "block", md: "none" }}>
        <Grid container display="flex">
              <Grid item xs={2} mt={2} ml={2}>
                <Image width="160px" height="100px"></Image>
              </Grid>
              <Grid item xs={8} ml={1}>
                <Typography
                  component="div"
                  variant="h5"
                  fontFamily={fontType}
                  fontWeight={600}
                  color={neural900}
                  fontSize="16px"
                  my={2}
                >
                  Primary Science Course
                </Typography>

                <Typography
              component="div"
              variant="h5"
              fontFamily={fontType}
              fontWeight={400}
              color={neural900}
              fontSize="16px"
              my={2}
            >
              RM 300.00
            </Typography>
            <Button
              key="/delete"
              sx={{
                display: "block",
                fontSize: 14,
                fontWeight: 600,
                lineHeight: "140%",
                fontFamily: fontType,
                backgroundColor: white,
                color: neural500,
                p:0,
                ":hover": { backgroundColor: white, color: neural900 },
              }}
            >
              <Grid container>
                <Grid item>
                  Remove
                </Grid>
                <Grid item>
                  <DeleteOutlineIcon />
                </Grid>
              </Grid>
            </Button>
              </Grid>
            </Grid>

       
      </Box>
    </>
  );
}

export default CartListHelper;
