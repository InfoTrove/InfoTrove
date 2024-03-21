import { useState, useEffect } from "react";
import "./index.css";
import handleFetch from "./utils/handleFetch";
import Home from "./pages/home";
import Books from "./pages/books";
import Movies from "./pages/movies";
import { Routes, Route } from "react-router-dom";
import BookDetail from "./pages/book";
import Articles from "./pages/articles/Articles";
import ResPage from "./pages/dynamicPages/results";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/books/:id" element={<BookDetail />}> </Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/results" element={<ResPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
