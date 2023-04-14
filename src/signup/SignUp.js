import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { IconButton, InputAdornment, Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const theme = createTheme();


export default function SignUp() {
  const [responseStatus, setResponseStatus] = React.useState();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const registrationData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    console.log(registrationData);

    axios
      .post(
        "http://localhost:8080/api/v1/users/register-user",
        registrationData
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.status);
          setResponseStatus(true);
          console.log(responseStatus);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            'url("https://images.pexels.com/photos/5851791/pexels-photo-5851791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Container maxWidth="xs">
          <Paper
            sx={{
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="password"
                      name="password"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  color={responseStatus ? "success" : "primary"}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {responseStatus ? "success" : "Sing Up"}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NavLink to="/">
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </NavLink>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
