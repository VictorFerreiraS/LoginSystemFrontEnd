import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/forgot_password/ForgotPassword";
import UserInfoController from "./pages/userInfo/UserInfoController";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPageController from "./pages/mainpage/MainPageController";

const queryClient = new QueryClient();

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      text: {
        primary: "#FFFFFF",
      },
      background: {
        paper: "rgb(25,25,25)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            {/*<NavbarController />*/}
            <Routes>
              <Route exact path="/" element={<MainPageController />} />
              <Route
                exact
                path={"/forgot-password"}
                element={<ForgotPassword />}
              />
              <Route
                exact
                path={"/user-info"}
                element={<UserInfoController />}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
