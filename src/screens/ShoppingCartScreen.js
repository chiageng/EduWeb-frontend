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
import React from "react";
import { fontType } from "../design/font";
import {
  neural900,
  neural700,
  neural300,
  white,
  orangeLight,
  neural500,
} from "../design/color";
import { Image } from "@mui/icons-material";

import CartHelper from "../components/CartHelper";
import CheckoutHelper from "../components/CheckoutHelper";

function ShoppingCartScreen() {
  return (
    <Container>
      <Box pt={5} pb={10}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <CartHelper/>
          </Grid>
          <Grid item xs={12} md={4}>
            <CheckoutHelper/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ShoppingCartScreen;
