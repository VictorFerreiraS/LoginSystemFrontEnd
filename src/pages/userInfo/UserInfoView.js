import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import NavbarController from "../../components/navbar/NavbarController";

export default function UserInfoView() {
  useDocumentTitle("User");
  // IS NOT INSTANT NEEDS TIME TO COMPLETE
  const user = useSelector((state) => state.user.value);
  const [response, setResponse] = useState("");

  const deleteUser = async () => {
    return await fetch("http://localhost:8080/api/v1/user/delete-user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((response) => {
      setResponse(response);
      return response.json();
    });
  };

  if (user === undefined) {
    return <Box>Loading...</Box>; // Render a loading state
  }

  return (
    <Box>
      <NavbarController />
    </Box>
  );
}
