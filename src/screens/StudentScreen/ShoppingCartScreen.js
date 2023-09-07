import {
  Container,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import CartHelper from "../../components/screenHelpers/CartHelper";
import CheckoutHelper from "../../components/screenHelpers/CheckoutHelper";

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
