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
  neural900,
  purplishBlue,
  purplishBlueDark,
  purplishBluePale,
  white,
} from "../design/color";
import { fontType } from "../design/font";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import Loader from "../components/universal/Loader";
import Message from "../components/universal/Message";

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

export default function LoginScreen() {
  const [email, setEmail] = useState("cgeng12@hotmail.com");
  const [password, setPassword] = useState("123456");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, user } = userLogin;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/mycourses");
    }
  }, [userLogin, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
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
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
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
              Student!
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
                  backgroundColor: purplishBlue,
                  fontFamily: fontType,
                  fontWeight: 600,
                }}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                href="/mycourses"
                sx={{
                  mt: 1,
                  mb: 2,
                  backgroundColor: white,
                  color: neural900,
                  fontFamily: fontType,
                  fontWeight: 600,
                }}
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
