import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"; 
import ArticlesContext from './context/articlesContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ArticlesContext.Provider value={ArticlesContext}>
      <App />
    </ArticlesContext.Provider>
  </BrowserRouter>,
);
