import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Food from "../Pages/Food";
import BMI from "../Pages/Bmi";
import Apph from "../Pages/Apph";
import Community from "../Pages/Community";
import Blog from "../Pages/Blog";
import Premium from "../Pages/Premium";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/food" element={<Food />}></Route>
      <Route path="/BMI" element={<BMI />}></Route>
      <Route path="/apph" element={<Apph />}></Route>
      <Route path="/community" element={<Login />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/premium" element={<Premium />}></Route>
    </Routes>
  );
};

export default AllRoutes;
