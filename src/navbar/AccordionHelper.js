import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Typography from "@mui/material/Typography";
import { hoverBlueButton, neural500, neural700, neural900, purplishBlue, purplishBluePale } from "../design/color";

function AccordionHelper({ open, icon, title, arrayItem}) {

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      {open && (
        <Accordion
          style={{
            width: "100%",
            borderWidth: 0,
            boxShadow: "none",
            background: "none",
          }}
        >
          <ListItemButton
            sx={{
              height: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              py: 0,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ width: "100%" }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 0,
                  justifyContent: "center",
                  ml: -1,
                }}
              >
                {icon}
              </ListItemIcon>
              <Typography sx={{ opacity: open ? 1 : 0 }}>{title}</Typography>
            </AccordionSummary>
          </ListItemButton>
          {arrayItem && arrayItem.map(item => (<ListItemButton
            key={item.item}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              py: 0,
            }}
            onClick = {item.navigation}
          >
            <AccordionDetails sx={{ p: 0}}>
              <Typography ml={5} sx={{ color: neural500}}>{item.item}</Typography>
            </AccordionDetails>
          </ListItemButton>))}
        </Accordion>
      )}

      {!open && (
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
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      )}
    </ListItem>
  );
}

export default AccordionHelper;
