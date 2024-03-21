import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BooksProvider from "./context/booksProvider.jsx";
import ArticlesProvider from "./context/articlesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticlesProvider>
      <BooksProvider>
        <App />
      </BooksProvider>
    </ArticlesProvider>
  </BrowserRouter>
);
