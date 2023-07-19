import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Box, Container } from "@mui/material";
import ProfileDetail from "../components/profile/ProfileDetail";
import ProfileDisplay from "../components/profile/ProfileDisplay";
import { viewProfile } from "../actions/userActions";

function MyProfileScreen() {
  const dispatch = useDispatch();
  const profileView = useSelector((state) => state.profileView);
  const navigate = useNavigate();

  const { loading, user, error } = profileView;

  useEffect(() => {
    if (!user) {
      dispatch(viewProfile());
    }
  }, [user]);

  return (
    <>
      <img
        src="/images/userprofile.jpg"
        style={{ height: "100%", width: "100%" }}
      />
      {user && (
        <Container>
          <Box pb={10}>
            {/* Display for webpage */}
            <Grid container display={{ xs: "none", md: "flex" }}>
              <Grid item mt={-8} width="100%" md={4}>
                <ProfileDetail
                  name={user.name}
                  gradeYear={user.grade_year}
                  school={user.school}
                  state={user.state}
                  country={user.country}
                />
              </Grid>
              <Grid item md={7} ml={4}>
                <ProfileDisplay />
              </Grid>
            </Grid>

            {/* Display for Phone */}
            <Grid container display={{ xs: "block", md: "none" }}>
              <Grid item mt={-5} width="100%" xs={12}>
                <ProfileDetail
                  name={user.name}
                  gradeYear={user.grade_year}
                  school={user.school}
                  state={user.state}
                  country={user.country}
                />
              </Grid>
              <Grid item xs={12}>
                <ProfileDisplay />
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default MyProfileScreen;
