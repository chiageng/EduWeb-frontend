import React from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import {
  neural900,
  purplishBlue,
  white,
} from "../../design/color";
import { fontType } from "../../design/font";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import EnhancedEncryptionOutlinedIcon from "@mui/icons-material/EnhancedEncryptionOutlined";
import { useNavigate } from "react-router-dom";

function ProfileSettings() {
  const navigate = useNavigate();

  return (
    <Box mt={5} width="100%">
      <Typography
        fontFamily={fontType}
        fontWeight={600}
        color={neural900}
        fontSize="32px"
        mt={0.5}
        mb={2}
      >
        Profile Settings
      </Typography>
      <Card
        sx={{
          mx: 0,
          borderRadius: "5px",
          backgroundColor: white,
          mb: "16px",
          width: "100%",
        }}
      >
        <CardContent sx={{ width: "80%" }}>
          <Grid container display="flex">
            <Grid item>
              <Person2OutlinedIcon sx={{ fontSize: 16, color: purplishBlue }} />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={400}
                color={purplishBlue}
                fontSize="16px"
                mt={0.5}
                ml={2}
              >
                Update my profile
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            display="flex"
            onClick={() => navigate(`/myprofile/edit/changepassword`)}
            sx={{ ":hover": { cursor: "pointer" } }}
          >
            <Grid item>
              <EnhancedEncryptionOutlinedIcon
                sx={{ fontSize: 16, color: neural900 }}
              />
            </Grid>
            <Grid item>
              <Typography
                fontFamily={fontType}
                fontWeight={400}
                color={neural900}
                fontSize="16px"
                mt={0.5}
                ml={2}
              >
                Change Password
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProfileSettings;
