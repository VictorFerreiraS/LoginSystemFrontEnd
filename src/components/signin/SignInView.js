import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./signin.css";
import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";
import { Box, Paper } from "@mui/material";

export default function SignInView({
  buttonMessage,
  buttonColor,
  onSubmit,
  initialValues,
  validationSchema,
  setButtonColor,
  setButtonMessage,
  isSignInOpen,
  setIsSignInOpen,
  signInFormPaperClassName,
  handleAnimationToggle,
}) {
  function handleSignInToggle() {
    if (!isSignInOpen) {
      isSignInOpen ? setIsSignInOpen(false) : setIsSignInOpen(true);
      handleAnimationToggle();
    }
  }

  return (
    <Box className={"sign-in-form-component-wrapper"}>
      <Grid container rowSpacing={2} direction={"column"} maxWidth={350}>
        <Grid item>
          <Typography
            align={"center"}
            className={isSignInOpen ? "" : "sign-in-title-pointer"}
            onClick={() => {
              handleSignInToggle();
            }}
            variant="h5"
            color={"primary"}
          >
            Sign In
          </Typography>
        </Grid>
        <Grid item>
          <SignInForm />
        </Grid>
      </Grid>
    </Box>
  );

  function SignInForm() {
    return (
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ isSubmitting }) => (
          <Form>
            <Paper className={signInFormPaperClassName}>
              <Grid container rowSpacing={2} direction={"column"}>
                <Grid item>
                  <Field name={"email"}>
                    {({ field }) => (
                      <TextField
                        onFocus={() => {
                          setButtonColor("primary");
                          setButtonMessage("submit");
                        }}
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        {...field}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name={"password"}>
                    {({ field }) => (
                      <TextField
                        onFocus={() => {
                          setButtonColor("primary");
                          setButtonMessage("submit");
                        }}
                        fullWidth={true}
                        label="Password"
                        variant="outlined"
                        {...field}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !isSignInOpen}
                    color={buttonColor}
                    fullWidth={true}
                    variant="contained"
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
  }
}
