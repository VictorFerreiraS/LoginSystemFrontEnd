import { ErrorMessage, Field, Form, Formik } from "formik";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  useDocumentTitle("Forgot Password");

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().email("Invalid email address!"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Box
          sx={{
            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(100,43,115,1) 0%, rgba(4,0,4,1) 90% )",
          }}
        >
          <Container
            maxWidth="xs"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Paper>
              <Form>
                <Grid padding={"20px"} container spacing={2}>
                  <Grid item xs={12} id={"alignCenter"}>
                    <Typography variant={"h5"}>Forgot Password?</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant={"subtitle2"}>
                      Type your email to reset your password!
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {" "}
                    <Field name={"email"}>
                      {({ field }) => (
                        <TextField
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
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </Grid>

                  <Grid item xs={12}>
                    <NavLink to={"/"}>Go back?</NavLink>
                  </Grid>
                </Grid>
              </Form>
            </Paper>
          </Container>
        </Box>
      )}
    </Formik>
  );
}
