import {Box} from "@mui/material";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./signin/SignIn";
import SignUpController from "./signup/SignUpController";

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUpController />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
