import { ApolloServer, gql } from "apollo-server-micro";
import fetch from "node-fetch";

const typeDefs = gql`
  type Article {
    headline: Headline
    abstract: String
    web_url: String
    multimedia: [Multimedia]
  }
  type Headline {
    main: String
  }
  type Multimedia {
    url: String
  }
  type Book {
    title: String
    primary_isbn10: String
    book_image: String
    description: String
  }
  type Query {
    getArticles(query: String!): [Article]
    getBooks(query: String!): [Book]
  }
`;

const key = "ExAHYt41AhGeWgODASX7LZZbVv3TTSu1";

const resolvers = {
  Query: {
    getArticles: async (_, { query }) => {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${key}`,
      );
      const data = await response.json();
      return data.response.docs.map((article) => ({
        headline: article.headline,
        abstract: article.abstract,
        web_url: article.web_url,
        multimedia: article.multimedia,
      }));
    },
    getBooks: async (_, { query }) => {
      const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${query}.json?api-key=${key}`,
      );
      const data = await response.json();
      return data.results.books.map((book) => ({
        title: book.title,
        primary_isbn10: book.primary_isbn10,
        book_image: book.book_image,
        description: book.description,
      }));
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
