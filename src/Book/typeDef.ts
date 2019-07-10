import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

export const typeDefs = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!,
    removeBook(title: String!): String!
  }
`;
