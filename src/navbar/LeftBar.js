import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Typography from "@mui/material/Typography";
import { neural900 } from "../design/color";
import AccordionHelper from "./AccordionHelper";
import { useSelector } from "react-redux";

function LeftBar({ logo, open, Drawer }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  return (
    
    <Drawer variant="permanent" open={open} float="left">
      {logo}
      <Divider />

      <List sx={{ minHeight: "400px" }}>
        <AccordionHelper open={open} title="Dashboard" icon={<HomeOutlinedIcon sx={{ color: neural900 }}/>} />

        <AccordionHelper open={open} title="Student" icon={<SchoolOutlinedIcon sx={{ color: neural900 }}/>} arrayItem={["All Students"]} />

        <AccordionHelper open={open} title="Teacher" icon={<PeopleAltOutlinedIcon sx={{ color: neural900 }} />} arrayItem={["All Teachers"]} />

        <AccordionHelper open={open} title="Courses" icon={<LibraryBooksOutlinedIcon sx={{ color: neural900 }} />} arrayItem={["My Course", "Create Course"]} />

        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 0,
                justifyContent: "center",
                ml: 1,
              }}
            >
              <StarBorderOutlinedIcon sx={{ color: neural900 }} />
            </ListItemIcon>
            <ListItemText primary="Reviews" sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default LeftBar;
