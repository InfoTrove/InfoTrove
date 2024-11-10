import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import BooksProvider from "./context/booksProvider.jsx";
import ArticlesProvider from "./context/articlesProvider.jsx";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/apolloClient.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ArticlesProvider>
        <BooksProvider>
          <App />
        </BooksProvider>
      </ArticlesProvider>
    </BrowserRouter>
  </ApolloProvider>,
);
