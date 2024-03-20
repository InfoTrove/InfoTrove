import { useState, useEffect } from "react";
import handleFetch from "../../utils/handleFetch";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movies&api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`,
        { cache: "force-cache" }
      );
      if (data) setMovies(data.results), console.log("movies", data);
      if (error) setError(error);
    };
    doFetch();
  }, []);
  return;
};

export default Movies;
