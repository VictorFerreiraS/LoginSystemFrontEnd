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
import { NavLink, useNavigate } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";
import * as Yup from "yup";
import instance from "../axios/axiosInstance";

export default function SignInView() {
  useDocumentTitle("Sign In");
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState("primary");
  const [buttonMessage, setButtonMessage] = useState("Submit");

  const initialValues = {
    email: "victor.fagundes586@gmail.com",
    password: "password",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("invalid email address"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    instance
      .post("http://localhost:8080/api/v1/auth/authenticate", values)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("user-info");
        }
      })
      .catch((error) => {
        if (error.code === "ERR_BAD_REQUEST") {
          setButtonMessage("Email or password incorrect");
          setButtonColor("error");
        } else {
          setButtonMessage("Internal Server Error");
          setButtonColor("error");
        }
      });
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
                    <Typography variant={"h5"}> Sign In</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Field name={"email"}>
                      {({ field }) => (
                        <TextField
                          onFocus={() => {
                            setButtonColor("primary");
                            setButtonMessage("Submit");
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
                          onFocus={() => {
                            setButtonColor("primary");
                            setButtonMessage("Submit");
                          }}
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
                      color={buttonColor}
                      fullWidth
                    >
                      {buttonMessage}
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <NavLink to={"/signup"}>
                      Don't have an account? Sign Up!
                    </NavLink>
                  </Grid>
                  <Grid item xs={6}>
                    <NavLink to={"/forgot-password"}>
                      Forgot your password?
                    </NavLink>
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
