import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useSelector } from "react-redux";

export default function UserInfoView() {
  useDocumentTitle("User");

  // IS NOT INSTANT NEDS TIME TO COMPLETE
  const user = useSelector((state) => state.user.value);

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
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
