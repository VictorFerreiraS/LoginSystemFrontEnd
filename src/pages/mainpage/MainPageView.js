import React, { useState } from "react";
import "./mainpage.css";
import SignInController from "../../components/signin/SignInController";
import { Grid } from "@mui/material";
import SignUpController from "../../components/signup/SignUpController";

export default function MainPageView() {
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [signInFormPaperClassName, setSignInFormPaperClassName] = useState(
    "sign-in-content-wrapper"
  );

  const [signUpFormPaperClassName, setSignUpFormPaperClassName] = useState(
    "sign-up-content-wrapper"
  );

  function handleAnimationToggle() {
    if (isSignInOpen) {
      setSignUpFormPaperClassName("sign-up-content-wrapper-open");
      setSignInFormPaperClassName("sign-in-content-wrapper-closed");
    } else {
      setSignUpFormPaperClassName("sign-up-content-wrapper-closed");
      setSignInFormPaperClassName("sign-in-content-wrapper-open");
    }
  }

  return (
    <>
      <Grid container className={"forms-components-wrapper"}>
        <Grid
          xs={12}
          sm={isSignInOpen ? 9 : 3}
          className="sign-in-component-wrapper"
        >
          <SignInController
            isSignInOpen={isSignInOpen}
            setIsSignInOpen={setIsSignInOpen}
            signInFormPaperClassName={signInFormPaperClassName}
            handleAnimationToggle={handleAnimationToggle}
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
            signUpFormPaperClassName={signUpFormPaperClassName}
            handleAnimationToggle={handleAnimationToggle}
          />
        </Grid>
      </Grid>
    </>
  );
}
