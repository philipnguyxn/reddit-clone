// Node Modules
import React from "react";
import IconButton from "@mui/material/IconButton";

// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DropdownButton = ({ slotProps }) => (
  <IconButton classes={slotProps}>
    <KeyboardArrowDownIcon />
  </IconButton>
);

export default DropdownButton;
