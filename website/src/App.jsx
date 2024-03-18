import { useState, useEffect } from "react";
import "./App.css";
import handleFetch from "./utils/handleFetch";
function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const handleClick = async () => {
    const [data, error] = await handleFetch(
      `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`
    );
    if (data) setData(data);
    console.log(data);
    if (error) setError(error);
  };

  return (
    <>
      <button onClick={handleClick}>submit</button>
    </>
  );
}

export default App;
