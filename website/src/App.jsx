import { useState, useEffect } from "react";
import "./index.css";
import handleFetch from "./utils/handleFetch";
import Home from "./pages/home";
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [topStories, setTopStories] = useState();

  const handleClick = async () => {
    const [data, error] = await handleFetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movies&api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`
    );
    if (data) setData(data);
    console.log(data);
    if (error) setError(error);
  };

  return (
    <>
      <Home />
    </>
  );
}

export default App;
