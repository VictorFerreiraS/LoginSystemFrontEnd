import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInView from "./signin/SignInView";
import SignUpController from "./signup/SignUpController";
import ForgotPassword from "./forgot_password/ForgotPassword";
import UserInfoController from "./userInfo/UserInfoController";
import { QueryClient, QueryClientProvider } from "react-query";
import NavbarController from "./navbar/NavbarController";

const queryClient = new QueryClient();

function App() {
  return (
    <Box className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NavbarController />
          <Routes>
            <Route exact path="/" element={<SignInView />} />
            <Route exact path="/signup" element={<SignUpController />} />
            <Route
              exact
              path={"/forgot-password"}
              element={<ForgotPassword />}
            />
            <Route exact path={"/user-info"} element={<UserInfoController />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Box>
  );
}

export default App;
