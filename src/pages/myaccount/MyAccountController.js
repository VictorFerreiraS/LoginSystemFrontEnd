import React, { useEffect, useState } from "react";
import MyAccountView from "./MyAccountView";
import jwt_decode from "jwt-decode";
import { getUserInfoFromToken } from "../../utils/utils.js";
import { useNavigate } from "react-router-dom";

export default function MyAccountController() {
  const navigate = useNavigate();
  const userInfo = getUserInfoFromToken();
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [isUserConfirmed, setIsUserConfirmed] = useState(userInfo.confirmed);

  const [deleteUserResponse, setDeleteUserResponse] = useState("");
  const [
    emailConfirmationRequestResponse,
    setEmailConfirmationRequestResponse,
  ] = useState("Send Confirmation email");

  const deleteUser = async () => {
    return await fetch("http://localhost:8080/api/v1/user/delete-user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((response) => {
      setDeleteUserResponse(response.text);
      setTimeout(() => {
        navigate("/");
      }, 500);
    });
  };

  const sendConfirmationEmail = async () => {
    setEmailConfirmationRequestResponse("Loading...");

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/send-confirmation-email",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      console.log(response);
      if (response.status === 200) {
        setEmailConfirmationRequestResponse("Email Sent");
      } else {
        setEmailConfirmationRequestResponse("Error sending email");
      }
    } catch (error) {
      setEmailConfirmationRequestResponse("Error: " + error.message);
    }
  };

  return (
    <>
      <MyAccountView
        firstName={firstName}
        lastName={lastName}
        deleteUser={deleteUser}
        isUserConfirmed={isUserConfirmed}
        deleteUserResponse={deleteUserResponse}
        emailConfirmationRequestResponse={emailConfirmationRequestResponse}
        sendConfirmationEmail={sendConfirmationEmail}
      />
    </>
  );
}
