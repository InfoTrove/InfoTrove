import { useState, useEffect } from "react";
import "./index.css";
import handleFetch from "./utils/handleFetch";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
