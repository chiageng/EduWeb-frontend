import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { neural900, purplishBlue, purplishBlueDark, purplishBluePale, white } from '../design/color';
import { fontType } from '../design/font';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Message from '../components/Message';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function RegisterScreen() {
  const [email, setEmail] = React.useState("cgeng12@hotmail.com");
  const [password, setPassword] = React.useState("123456");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const {error, loading, user} = userRegister;


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser({email, password}));
  };

  return (
    <>
    {error && <Message type="error" >{error.message}</Message>}
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square sx={{backgroundColor: purplishBluePale }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              
            }}
          >
            <Typography component="h1" variant="h5" sx={{fontFamily: fontType, fontWeight: 1000, fontSize: 40, color: neural900}}>
              Enjoy online
            </Typography>
            <Typography component="h1" variant="h5" sx={{fontFamily: fontType, fontWeight: 1000, fontSize: 40, color: neural900}}>
              Education for free!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                onChange={(e) => setEmail(e.target.value)}
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
                onClick={handleSubmit}
                sx={{ mt: 3, backgroundColor: purplishBlue, fontFamily: fontType, fontWeight: 600 }}
              >
                Sign Up
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                href="/mycourses"
                sx={{ mt: 1, mb: 2, backgroundColor: white, color: neural900, fontFamily: fontType, fontWeight: 600 }}
              >
                Cancel
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/login" variant="body2" sx={{ color: purplishBlueDark, fontFamily: fontType, fontWeight: 600, fontSize: 12}}>
                    {"Already have an account? Sign In"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}