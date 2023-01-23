import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage";


function RouterPage() {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default RouterPage;
