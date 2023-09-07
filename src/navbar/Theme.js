import { createTheme } from '@mui/material/styles';
import {  purplishBlue, purplishBlueDark, white } from "../design/color";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: white,
      fontFamily: "Poppins"
    },
  },
});

export const adminTheme = createTheme({
  palette: {
    primary: {
      main: purplishBlueDark,
      fontFamily: "Poppins"
    },
  },
});

