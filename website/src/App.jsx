import { useState, useEffect } from "react";
import "./index.css";
import handleFetch from "./utils/handleFetch";
import Home from "./pages/home";
import Books from "./pages/books";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </>
  );
}

export default App;
