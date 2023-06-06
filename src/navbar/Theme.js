import { createTheme } from '@mui/material/styles';
import {  white } from "../design/color";

const myTheme = createTheme({
  palette: {
    primary: {
      main: white,
      fontFamily: "Poppins"
    },
  },
});

export default myTheme;
