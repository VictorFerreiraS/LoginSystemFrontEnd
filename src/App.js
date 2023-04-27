import { Box } from "@mui/material";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./signin/SignIn";
import SignUpController from "./signup/SignUpController";
import ForgotPassword from "./forgot_password/ForgotPassword";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUpController />} />
          <Route exact path={"/forgot-password"} element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
