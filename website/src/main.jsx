import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ArticlesProvider from '../src/context/articlesProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticlesProvider>
      <App />
    </ArticlesProvider>
  </BrowserRouter>,
);
