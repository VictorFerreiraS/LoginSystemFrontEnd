import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./signin.css";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Grid from "@mui/material/Grid";
import { Field, Form, Formik } from "formik";

export default function SignInView({
  buttonMessage,
  buttonColor,
  onSubmit,
  initialValues,
  validationSchema,
  setButtonColor,
  setButtonMessage,
}) {
  useDocumentTitle("Sign In");

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({ isSubmitting }) => (
        <Form className="sign_in_form_wrapper">
          <Grid container rowSpacing={2} direction={"column"} maxWidth={350}>
            <Grid item>
              <Typography variant="h5">Sign In</Typography>
            </Grid>
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
            <Grid item>
              <Button
                type="submit"
                disabled={isSubmitting}
                color={buttonColor}
                fullWidth={true}
                variant="contained"
              >
                {buttonMessage}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
