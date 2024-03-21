import { useState, useEffect } from "react";
import ArticlesContext from "./articlesContext";
import handleFetch from "../utils/handleFetch";

const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=ExAHYt41AhGeWgODASX7LZZbVv3TTSu1",
        { cache: "force-cache" }
      );
      if (data) setArticles(data.response.docs);
      if (error) setError(error);
    };
    doFetch();
  }, []);

  const contextValue = { articles };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
