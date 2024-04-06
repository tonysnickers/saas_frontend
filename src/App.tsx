import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import Home from "./components/Home";
import { Login } from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
