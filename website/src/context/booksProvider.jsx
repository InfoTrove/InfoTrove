import { useState } from "react";
import BooksContext from "./booksContext";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks($listName: String!) {
    getBooks(query: $listName) {
      title
      primary_isbn10
      book_image
      description
    }
  }
`;

const BooksProvider = ({ children }) => {
  const [listName, setListName] = useState("hardcover-fiction"); // Default list
  const { data, loading, error } = useQuery(GET_BOOKS, {
    variables: { listName },
  });

  const books = data?.getBooks || [];

  const contextValue = { books, loading, error, setListName };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
