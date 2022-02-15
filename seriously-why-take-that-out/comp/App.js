import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login}from "./pages/Login"
import { SignUp } from "./pages/SignUp";
import { SearchPage } from "./pages/SearchPage";
import { LandingPage } from "./pages/LandingPage";
import Row from "./pages/Table/CoinInfo";
import { Error } from "./pages/Error";
import "./App.css";
import "./app1.css"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dash" element={<Nav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SearchPage" element={<SearchPage  />} />
        <Route path="/table" element={<Row  />} />
        <Route element={<Error  />} />
      </Routes>
    </Router>
  );
}

export default App;
