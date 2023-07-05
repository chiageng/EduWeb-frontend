import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import { Box, IconButton, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Message({ type, children }) {
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
    <Container>

    <Box sx={{ width: "90%", mt: 1, position: 'absolute'}}>
      <Collapse in={open}>
        <Alert severity={type} action={action} sx={{ mb: 2 }}>
          <AlertTitle>{output}</AlertTitle>
          {children} — <strong>check it out!</strong>
        </Alert>
      </Collapse>
    </Box>
    </Container>
  );
}

export default Message;
