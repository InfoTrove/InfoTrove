import { useState, useEffect } from "react";
import ArticlesContext from "./articlesContext";
import { gql, useQuery } from "@apollo/client";

const GET_ARTICLES = gql`
  query GetArticles($query: String!) {
    getArticles(query: $query) {
      headline {
        main
      }
      abstract
      web_url
      multimedia {
        url
      }
    }
  }
`;

const ArticlesProvider = ({ children }) => {
  const { data, loading, error } = useQuery(GET_ARTICLES, {
    variables: { query: "election" }, // Default query
  });

  const articles = data?.getArticles || [];

  const contextValue = { articles, loading, error };

  return (
    <ArticlesContext.Provider value={contextValue}>
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesProvider;
