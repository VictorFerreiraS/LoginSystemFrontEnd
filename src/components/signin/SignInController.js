import React, { useState } from "react";
import SignInView from "./SignInView";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import instance from "../../axios/axiosInstance";

export default function SignInController() {
  const navigate = useNavigate();
  const [buttonColor, setButtonColor] = useState("primary");
  const [buttonMessage, setButtonMessage] = useState("Submit");

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("invalid email address"),
    password: Yup.string().required("Required"),
  });

  const initialValues = {
    email: "victor.fagundes586@gmail.com",
    password: "password",
  };
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
          setTimeout(() => {
            setButtonMessage("Submit");
            setButtonColor("primary");
            setSubmitting(false);
            resetForm();
          }, 1000);
        }
      });
  };

  return (
    <div>
      <SignInView
        buttonMessage={buttonMessage}
        buttonColor={buttonColor}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        setButtonColor={setButtonColor}
        setButtonMessage={setButtonMessage}
      />
    </div>
  );
}
