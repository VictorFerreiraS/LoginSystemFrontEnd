import React, { useState } from "react";
import SignUpView from "./SignUpView";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import instance from "../../axios/axiosInstance";

export default function SignUpController() {
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
    <>
      <SignUpView
        buttonMessage={buttonMessage}
        buttonColor={buttonColor}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        setButtonColor={setButtonColor}
        setButtonMessage={setButtonMessage}
      />
    </>
  );
}
