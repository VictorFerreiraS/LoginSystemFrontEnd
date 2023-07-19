import React, { useState } from "react";
import "./mainpage.css";
import SignInController from "../../components/signin/SignInController";
import { Grid } from "@mui/material";
import SignUpController from "../../components/signup/SignUpController";

export default function MainPageView() {
  const [toggleForms, setToggleForms] = useState(true);

  return (
    <>
      <Grid container className={"forms-components-wrapper"}>
        <Grid
          xs={12}
          sm={toggleForms ? 9 : 3}
          className="sign-in-component-wrapper"
        >
          <SignInController
            toggleForms={toggleForms}
            setToggleForms={setToggleForms}
          />
        </Grid>
        <Grid
          xs={12}
          sm={toggleForms ? 3 : 9}
          className={"sign-up-component-wrapper"}
        >
          <SignUpController
            toggleForms={toggleForms}
            setToggleForm={setToggleForms}
          />
        </Grid>
      </Grid>
    </>
  );
}
