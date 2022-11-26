import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { CreateAccount } from "./pages/CreateAccount";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreateAccount />} />
        </Routes>
    </Router>
  );
}

export default App;