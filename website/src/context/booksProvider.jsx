import { useEffect } from "react";
import BooksContext from "./booksContext";
import { useState } from "react";
import handleFetch from "../utils/handleFetch";

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      console.log("fetching");
      const [data, error] = await handleFetch(
        //create a new api and delete this api key and hide it using config.js
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=S40TyD7zGe3HkXJZD4MiENxkBybALIxp`,
        { cache: "force-cache" }
      );
      if (data) setBooks(data.results.books);
      if (error) setError(error);
    };
    doFetch();
  }, []);

  const contextValue = { books };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
