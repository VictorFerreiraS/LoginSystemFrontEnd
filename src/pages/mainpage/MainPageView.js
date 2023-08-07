import React, { useState } from "react";
import "./mainpage.css";
import SignInController from "./signin/SignInController";
import { Grid } from "@mui/material";
import SignUpController from "./signup/SignUpController";

export default function MainPageView() {
  const [isSignInOpen, setIsSignInOpen] = useState(true);

  return (
    <>
      <Grid container>
        <Grid
          className="sign-in-component-wrapper"
          xs={12}
          sm={isSignInOpen ? 9 : 3}
        >
          <SignInController
            isSignInOpen={isSignInOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        </Grid>
        <Grid
          xs={12}
          sm={isSignInOpen ? 3 : 9}
          className={"sign-up-component-wrapper"}
        >
          <SignUpController
            isSignInOpen={isSignInOpen}
            setIsSignInOpen={setIsSignInOpen}
          />
        </Grid>
      </Grid>
    </>
  );
}
