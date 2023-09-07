import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  activeBlueButton,
  activeBorderBlueButton,
  hoverBlueButton,
  hoverBorderBlueButton,
  neural900,
  pressedBlueButton,
  pressedBorderBackgroundBlueButton,
  pressedBorderBlueButton,
  purplishBlueDark,
  purplishBluePale,
  white,
} from "../../design/color";
import { fontType } from "../../design/font";
import { useDispatch, useSelector } from "react-redux";
import { loginAdminUser } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/universal/Loader";
import Message from "../../components/universal/Message";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AdminLoginScreen() {
  const [email, setEmail] = useState("cgeng12@hotmail.com");
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin/mycourses");
    }
  }, [userLogin, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginAdminUser({ email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      {loading && <Loader/>}
      {!loading && error && <Message type="error">{error}</Message>}
      {!loading && <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(../images/loginPhoto2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: purplishBluePale }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontFamily: fontType,
                fontWeight: 1000,
                fontSize: 40,
                color: neural900,
              }}
            >
              Welcome Back,
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontFamily: fontType,
                fontWeight: 1000,
                fontSize: 40,
                color: neural900,
              }}
            >
              Admin!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                inputProps={{
                  style: {
                    backgroundColor: white,
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputProps={{
                  style: {
                    backgroundColor: white,
                  },
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: 12,
                  borderRadius: 2,
                  backgroundColor: activeBlueButton,
                  fontFamily: fontType,
                  fontWeight: 600,
                  textTransform: "capitalize",
                  ":hover": { backgroundColor: hoverBlueButton},
                  ":focus": { backgroundColor: pressedBlueButton },
                }}
              >
                Log In
              </Button>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  color: purplishBlueDark,
                  textTransform: "capitalize",
                  py: 1.5,
                  mt: 1,
                  borderRadius: 2,
                  fontSize: 12,
                  fontWeight: 600,
                  borderColor: activeBorderBlueButton,
                  backgroundColor: white,
                  ":hover": {
                    borderColor: hoverBorderBlueButton,
                  },
                  ":focus": {
                    bgcolor: pressedBorderBackgroundBlueButton,
                    borderColor: pressedBorderBlueButton,
                  },
                }}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: purplishBlueDark,
                      fontFamily: fontType,
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="/signup"
                    variant="body2"
                    sx={{
                      color: purplishBlueDark,
                      fontFamily: fontType,
                      fontWeight: 600,
                      fontSize: 12,
                    }}
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>}
    </ThemeProvider>
  );
}
