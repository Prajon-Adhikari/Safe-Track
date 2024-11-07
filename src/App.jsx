import React from "react";
import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import SignUp from "./Components/SignUp";
import EmployeeRegistration from "./Components/EmployeeRegistration";
import SignIn from "./Components/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/register" element={<EmployeeRegistration />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
