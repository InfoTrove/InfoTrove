import { gql, useQuery } from "@apollo/client";
import BooksContext from "./booksContext";
import React, { useState, useEffect } from "react";

const GET_BOOKS = gql`
  query GetBooks($listName: String!) {
    getBooks(query: $listName) {
      title
      primary_isbn10
      book_image
      description
      buy_links {
        name
        url
      }
    }
  }
`;

const BooksProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_BOOKS, {
    variables: { listName: "hardcover-fiction" },
  });

  const books = data?.getBooks || [];

  const contextValue = { books, loading, error };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
