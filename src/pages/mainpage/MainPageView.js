import React from "react";
import "./mainpage.css";
import SignInController from "../../components/signin/SignInController";
import { Grid } from "@mui/material";
import SignUpController from "../../components/signup/SignUpController";

export default function MainPageView() {
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={6} className="sign_in_wraper">
          <SignInController />
        </Grid>
        <Grid xs={12} sm={6}>
          <SignUpController />
        </Grid>
      </Grid>
    </>
  );
}
