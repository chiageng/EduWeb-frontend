import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Message({ type }) {
  const [open, setOpen] = useState(true);
  const action = (
    <IconButton
      aria-label="close"
      color="inherit"
      size="small"
      onClick={() => {
        setOpen(false);
      }}
    >
      <CloseIcon fontSize="inherit" />
    </IconButton>
  );

  let output = "Info";

  if (type === "warning") {
    output = "Warning"
  } else if (type === "error") {
    output = "Error"
  } else if (type === "success") {
    output="Success"
  }

  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <Collapse in={open}>
        <Alert severity={type} action={action} sx={{ mb: 2 }}>
          <AlertTitle>{output}</AlertTitle>
          This is an {type} alert — <strong>check it out!</strong>
        </Alert>
      </Collapse>
    </Box>
  );
}

export default Message;
