import React, { useEffect, useState } from "react";
import MyAccountView from "./MyAccountView";
import jwt_decode from "jwt-decode";
import {getUserInfoFromToken} from "../../utils/utils.js";

export default function MyAccountController() {
  const userInfo = getUserInfoFromToken();
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);

  return (
    <>
      <MyAccountView firstName={firstName} lastName={lastName} />
    </>
  );
}
