import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavbarView({ logout }) {
  const user = useSelector((state) => state.user.value);

  return (
    <Grid
      container
      sx={{
        backgroundImage:
          "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
        height: "40px",
        alignItems: "center",
        paddingX: "20px",
      }}
    >
      <Grid item xs={10}>
        <Typography variant="h5" color="white">
          SyLogin
        </Typography>
      </Grid>
      {user === undefined || user.isEmpty ? (
        <>
          <Grid item xs={1}>
            <NavLink to="/signup">Sign Up</NavLink>
          </Grid>
          <Grid item xs={1}>
            <NavLink to="/">Sign In</NavLink>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={1}>
            <Typography variant="p" color={"white"}>
              Hi {user.fullName}
            </Typography>
          </Grid>
          {/*  TODO: implement logout function */}
          <Grid item xs={1}>
            <NavLink to="/" onClick={() => logout()}>
              Sign Out
            </NavLink>
          </Grid>
        </>
      )}
    </Grid>
  );
}
