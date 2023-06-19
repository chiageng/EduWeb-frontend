import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { neural300, purplishBlueDark, white } from "../design/color";

export default function ResponsiveFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: purplishBlueDark,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color={white}
              fontFamily="Poppins"
              gutterBottom
            >
              EDUWEB
            </Typography>
            <Typography variant="body2" color={neural300} fontFamily="Poppins">
              EDUWEB is a learning platform that helps students get better
              grades in schools through game-like quizzes, etsts, exams, notes
              and videos
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color={white}
              fontFamily="Poppins"
              gutterBottom
            >
              About
            </Typography>
            <Typography
              variant="body2"
              color={neural300}
              sx={{
                mb: 1,
              }}
              fontFamily="Poppins"
            >
              Learning Experience
            </Typography>
            <Typography
              variant="body2"
              color={neural300}
              sx={{
                mb: 1,
              }}
              fontFamily="Poppins"
            >
              Our Stories
            </Typography>
            <Typography
              variant="body2"
              color={neural300}
              sx={{
                mb: 1,
              }}
              fontFamily="Poppins"
            >
              Career
            </Typography>
            <Typography
              variant="body2"
              color={neural300}
              sx={{
                mb: 1,
              }}
              fontFamily="Poppins"
            >
              Blog
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color={white}
              fontFamily="Poppins"
              gutterBottom
            >
              Legal
            </Typography>
            <Typography variant="body2" color={neural300} sx={{
                mb: 1,
              }} fontFamily="Poppins">
              Terms & Condition
            </Typography>
            <Typography variant="body2" color={neural300} sx={{
                mb: 1,
              }} fontFamily="Poppins">
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              color={white}
              fontFamily="Poppins"
              gutterBottom
            >
              Link
            </Typography>
            <Link href="https://www.facebook.com/" color={neural300}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color={neural300}
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color={neural300}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color={neural300} sx={{
                pb: 3,
              }} align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
