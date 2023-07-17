import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

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
    return <div>Loading...</div>; // Render a loading state
  }

  return (
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
          <Grid padding={"20px"} container spacing={2}>
            <Grid item xs={12} id={"alignCenter"}>
              <Typography variant="h5">Hi {user.fullName}</Typography>
            </Grid>
            <Grid item xs={12} id={"alignCenter"}>
              <Button onClick={() => deleteUser()} color={"error"}>
                Delete Me!
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
