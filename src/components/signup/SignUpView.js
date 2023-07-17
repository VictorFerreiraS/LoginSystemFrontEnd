import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./signup.css";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function SignUpView({
  buttonMessage,
  buttonColor,
  onSubmit,
  initialValues,
  validationSchema,
  setButtonColor,
  setButtonMessage,
}) {
  useDocumentTitle("Sign Up");

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="sign_up_form_wrapper">
          <Grid container rowSpacing={2} maxWidth={350}>
            <Grid item xs={12}>
              <Typography variant={"h5"}>Sign Up</Typography>
            </Grid>
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
              <ErrorMessage name={"firstName"} />
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
              <ErrorMessage name={"lastName"} />
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
              <ErrorMessage name={"email"} />
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
              <ErrorMessage name={"password"} />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                color={buttonColor}
              >
                {buttonMessage}
              </Button>
            </Grid>{" "}
            <Grid item xs={12}>
              <NavLink to={"/"}>Already has an account? Sign In!</NavLink>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
