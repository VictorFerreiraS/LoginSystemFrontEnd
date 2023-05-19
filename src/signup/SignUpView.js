import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import instance from "../axios/axiosInstance";

export default function SignUpView() {
  useDocumentTitle("Sign Up");
  const [buttonColor, setButtonColor] = useState("primary");
  const [buttonMessage, setButtonMessage] = useState("Submit");
  const navigate = useNavigate();

  const initialValues = {
    firstName: "Victor",
    lastName: "Ferreira",
    email: "victor.fagundes586@gmail.com",
    password: "password",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().required("Required").email("invalid email address"),

    password: Yup.string()
      .required("Required")
      .min(8, "Password must be at least 8 characters "),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    setButtonMessage("loading...");
    instance
      .post("http://localhost:8080/api/v1/auth/register", values)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/user-info");
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          setButtonMessage("Email taken");
          setButtonColor("error");
        } else {
          setButtonMessage("Internal Server Error");
          setButtonColor("error");
        }
      });

    // Reset the form and set isSubmitting to false
    resetForm();
    setSubmitting(false);
  };

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
                    <Typography variant={"h5"}> Sign Up</Typography>
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
            </Paper>
          </Container>
        </Box>
      )}
    </Formik>
  );
}
