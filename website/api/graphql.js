import { ApolloServer, gql } from "apollo-server-micro";
import fetch from "node-fetch";

// Type defintions for the schema
// All the types count as availiable querriesin the same endpoint
// Query is setting up the endpoints to get data
// Resolvers act like handlers for the graphql queries (endpoints)
// Apollo setups up the graphQL and a server to connect it to the frontend (website)

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

  type BuyLink {
    name: String
    url: String
  }

  type Book {
    title: String
    primary_isbn10: String
    book_image: String
    description: String
    buy_links: [BuyLink]
  }
  type Query {
    getArticles(query: String!): [Article]
    getBooks(query: String!): [Book]
  }
`;
const resolvers = {
  Query: {
    getArticles: async (_, { query }) => {
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NYT_API_KEY_ARTICLES}`,
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
        `https://api.nytimes.com/svc/books/v3/lists/current/${query}.json?api-key=${process.env.NYT_API_KEY_BOOKS}`,
      );
      const data = await response.json();
      console.log("NYT API response for books:", data);
      return data.results.books.map((book) => ({
        title: book.title,
        primary_isbn10: book.primary_isbn10,
        book_image: book.book_image,
        description: book.description,
        buy_links: book.buy_links.map((link) => ({
          name: link.name,
          url: link.url,
        })),
      }));
    },
  },
};
console.log("resolvers", resolvers);
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  const handler = server.createHandler({ path: "/api/graphql" });
  return handler(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
