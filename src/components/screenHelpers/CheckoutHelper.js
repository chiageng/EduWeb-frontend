import React from "react";
import {
  Grid,
  Box,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { fontType } from "../../design/font";
import {
  neural900,
  white,
  neural500,
  purplishBlue,
  purplishBlueDark,
} from "../../design/color";

function CheckoutHelper() {
  return (
    <>
      {/* Order summary for webpage */}
      <Box
      sx={{
        width: "80%",
        bgcolor: "background.paper",
        ml: 2,
      }}
      display={{xs: 'none', md: 'block'}}
    >
      <Typography
        component="div"
        variant="h5"
        fontFamily={fontType}
        fontWeight={600}
        color={neural500}
        fontSize="14px"
        py={3}
        pl={2}
      >
        Order Summary
      </Typography>
      <Grid container display="flex" justifyContent="space-between">
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
          >
            Subtotal(3 items)
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
            pr={1}
          >
            RM900.00
          </Typography>
        </Grid>
      </Grid>
      <Grid container display="flex" justifyContent="space-between" mb={2}>
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
          >
            GST 7%
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
            pr={1}
          >
            RM33.00
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        mt={3}
        alignItems="center"
      >
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural900}
            fontSize="16px"
          >
            Total
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural900}
            fontSize="28px"
            pr={1}
          >
            RM933.00
          </Typography>
        </Grid>
      </Grid>

      <Grid container display="flex" justifyContent="space-between">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Button
            key="/courses"
            sx={{
              my: "24px",
              display: "block",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "140%",
              borderRadius: 2,
              fontFamily: fontType,
              backgroundColor: purplishBlue,
              color: white,
              width: '100%',
              py: 1.5,
              ":hover": { backgroundColor: purplishBlueDark },
            }}
          >
            Checkout Now
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>


    {/* Order summary for phone  */}
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        mt:2
      }}
      display={{xs: 'block', md: 'none'}}
    >
      <Typography
        component="div"
        variant="h5"
        fontFamily={fontType}
        fontWeight={600}
        color={neural500}
        fontSize="14px"
        py={3}
        pl={2}
      >
        Order Summary
      </Typography>
      <Grid container display="flex" justifyContent="space-between">
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
          >
            Subtotal(3 items)
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
            pr={1}
          >
            RM900.00
          </Typography>
        </Grid>
      </Grid>
      <Grid container display="flex" justifyContent="space-between" mb={2}>
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
          >
            GST 7%
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={400}
            color={neural900}
            fontSize="16px"
            pr={1}
          >
            RM33.00
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        mt={3}
        alignItems="center"
      >
        <Grid item ml={2}>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural900}
            fontSize="16px"
          >
            Total
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            fontFamily={fontType}
            fontWeight={600}
            color={neural900}
            fontSize="28px"
            pr={1}
          >
            RM933.00
          </Typography>
        </Grid>
      </Grid>

      <Grid container display="flex" justifyContent="space-between">
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Button
            key="/courses"
            sx={{
              my: "24px",
              display: "block",
              fontSize: 14,
              fontWeight: 600,
              lineHeight: "140%",
              borderRadius: 2,
              fontFamily: fontType,
              backgroundColor: purplishBlue,
              color: white,
              width: '100%',
              py: 1.5,
              ":hover": { backgroundColor: purplishBlueDark },
            }}
          >
            Checkout Now
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
    </>
  );
}

export default CheckoutHelper;
