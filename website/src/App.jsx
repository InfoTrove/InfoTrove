import { useState, useEffect } from "react";
import "./index.css";
import handleFetch from "./utils/handleFetch";
import Home from "./pages/home";
import Books from "./pages/books";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/book";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:id" element={<BookDetail />}> </Route>
      </Routes>
    </>
  );
}

export default App;
