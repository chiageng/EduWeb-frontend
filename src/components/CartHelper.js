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
import CartListHelper from "./CartListHelper";

function CartHelper() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Typography
        component="div"
        variant="h5"
        fontFamily={fontType}
        fontWeight={900}
        color={neural900}
        fontSize="32px"
        py={3}
        pl={2}
      >
        Shopping Cart
      </Typography>
      <Divider variant="middle" />

      {/* Header for table - webpage design */}
      <Grid container display={{xs: "none", md: "flex"}} justifyContent="space-between">
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural500}
            fontSize="16px"
            my={3}
            ml={3}
          >
            Product
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural500}
            fontSize="16px"
            my={3}
            mr={2}
          >
            Price
          </Typography>
        </Grid>
      </Grid>

      {/* Header for table -phone design */}
      <Grid container display={{xs: "flex", md: "none"}}>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural500}
            fontSize="16px"
            my={3}
            ml={3}
          >
            Product
          </Typography>
        </Grid>
      </Grid>
      <CartListHelper/>
    </Box>
  );
}

export default CartHelper;
