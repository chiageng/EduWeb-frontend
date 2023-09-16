import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { neural900, purplishBlue, purplishBlueDark, white } from "../../design/color";

const ITEM_HEIGHT = 48;


export default function ExpandMenu({ options }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleCloseMenu = (navigation) => {
  //   setAnchorEl(null);
  //   navigate(navigation)
  // };

  const handleCloseMenu = (action) => {
    setAnchorEl(null);
    action();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: purplishBlue }}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.title}
            onClick={() => handleCloseMenu(option.action)}
            sx={{ color: neural900, ":hover": {color: purplishBlue} }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
