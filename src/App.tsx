import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import Home from "./components/Home";
import { Login } from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
