import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signin/SignIn";
import SignUpController from "./signup/SignUpController";
import ForgotPassword from "./forgot_password/ForgotPassword";
import UserInfoController from "./userInfo/UserInfoController";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Box className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
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
