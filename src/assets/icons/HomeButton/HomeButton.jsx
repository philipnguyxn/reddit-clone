// Node Modules
import React from "react";
import IconButton from "@mui/material/IconButton";

// Icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const HomeButton = ({ slotProps }) => (
  <IconButton classes={slotProps}>
    <HomeRoundedIcon />
  </IconButton>
);

export default HomeButton;
