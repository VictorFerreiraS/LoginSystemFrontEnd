import {
  Collapse,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink, Navigate } from "react-router-dom";

export default function NavbarView({ logout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container sx={{ padding: "10px 20px" }}>
      <Grid item xs={11}>
        <Typography variant="h5" color="white">
          SyLogin
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Container>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <NavLink to="/my-account">
              <MenuItem onClick={() => handleClose()}>My Account</MenuItem>
            </NavLink>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Container>
      </Grid>
    </Grid>
  );
}
