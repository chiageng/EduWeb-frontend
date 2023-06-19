import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { fontType } from "../design/font";
import {
  neural500,
  neural700,
  neural900,
  purplishBluePale,
} from "../design/color";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PhonePlayList() {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => () => {
    setState(open);
  };

  const item = (
    <ListItem sx={{ py: "8px" }}>
      <Button
        onClick={() => (window.location.href = `./mycourses`)}
        style={{ textAlign: "left" }}
        sx={{
          p: 0,
          width: "95%",
          height: "80px",
          ":hover": { backgroundColor: purplishBluePale },
        }}
      >
        <Grid container>
          <Grid item xs={1} sm={1}></Grid>
          <Grid item xs={2} sm={2}>
            <CardMedia
              sx={{ height: 36, width: 36 }}
              image="/images/chem-logo.jpg"
            />
          </Grid>
          <Grid item xs={8} sm={8}>
            <Typography
              sx={{
                fontSize: "16px",
                fontFamily: fontType,
                fontWeight: 600,
                color: neural700,
              }}
            >
              Topic 1 State of matter
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: fontType,
                fontWeight: 400,
                color: neural500,
              }}
            >
              CS Wong
            </Typography>
          </Grid>
        </Grid>
      </Button>
    </ListItem>
  );

  const list = (
    <Box
      sx={{ width: "100%" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
      </List>
    </Box>
  );

  return (
    <React.Fragment key="bottom">
      <Card
        sx={{
          display: "flex",
          borderRadius: "5px",
          mb: "16px",
          width: "100%",
        }}
      >
        <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
          <CardContent>
            <Typography
              variant="h5"
              fontFamily={fontType}
              fontWeight={900}
              color={neural900}
              fontSize="20px"
            >
              Topic title
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            <Button onClick={toggleDrawer(true)}><ExpandMoreIcon /></Button>
            <Drawer
              anchor="bottom"
              open={state}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  height: "400px",
                },
              }}
            >
              {list}
            </Drawer>
          </Box>
        </Box>
      </Card>
    </React.Fragment>
  );
}
