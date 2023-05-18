import React, { useState } from "react";
import SignInView from "./SignInView";
import instance from "../axios/axiosInstance";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignInController() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [responseStatus, setResponseStatus] = useState();

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("invalid email address"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    instance
      .post("http://localhost:8080/api/v1/auth/authenticate", values)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          navigate("/user-info");
        } else {
          setError("email or password incorrect");
        }
      });
  };

  return (
    <div>
      <SignInView
        onSubmit={onSubmit}
        error={error}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </div>
  );
}
