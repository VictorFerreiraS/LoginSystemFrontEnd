import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./signup.css";

import { Field, Form, Formik } from "formik";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import { Box, Collapse, Paper } from "@mui/material";

export default function SignUpView({
  buttonMessage,
  buttonColor,
  onSubmit,
  initialValues,
  validationSchema,
  setButtonColor,
  setButtonMessage,
  isSignInOpen,
  setIsSignInOpen,
}) {
  function handleSignInToggle() {
    if (isSignInOpen) {
      isSignInOpen ? setIsSignInOpen(false) : setIsSignInOpen(true);
    }
  }

  const signUpForm = (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Paper className={"sign-up-form-content-wrapper"}>
            <Grid container rowSpacing={2} maxWidth={350}>
              <Grid item xs={6}>
                <Field name={"firstName"}>
                  {({ field }) => (
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field name={"lastName"}>
                  {({ field }) => (
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name={"email"}>
                  {({ field }) => (
                    <TextField
                      onFocus={() => {
                        setButtonColor("primary");
                        setButtonMessage("submit");
                      }}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Field name={"password"}>
                  {({ field }) => (
                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      {...field}
                    />
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting || isSignInOpen}
                  color={buttonColor}
                >
                  {buttonMessage}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Form>
      )}
    </Formik>
  );

  return (
    <Box className={"sign-up-form-component-wrapper"}>
      <Grid container rowSpacing={2} direction={"column"} maxWidth={350}>
        <Grid item>
          <Typography
            align={"center"}
            className={isSignInOpen ? "sign-up-title-pointer" : ""}
            onClick={() => {
              handleSignInToggle();
            }}
            variant="h5"
            color={"primary"}
          >
            Sign Up
          </Typography>
        </Grid>
        <Grid item>
          <Collapse in={!isSignInOpen}>{signUpForm}</Collapse>
        </Grid>
      </Grid>
    </Box>
  );
}
