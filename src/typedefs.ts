import { gql } from 'apollo-server';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.

const typeDefs = gql`
  # This "Book" type can be used in other type declarations.
  type Book {
    id: Int,
    title: String,
    author: String,
  }

  type Book1 {
    id: Int,
    title: String,
    author: String,
  }

  input BookInput {
    title: String,
    author: String,
  }

  input BookInput1 {
    title: String,
    author: String,
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    books: [Book],
    books1: [Book1]
  }

  type Mutation {
    addBook(book: BookInput!): Book!,
    removeBook(id: Int!): String!,
    updateBook(id: Int!, toUpdate: BookInput!): Book1!,
    addBook1(book: BookInput1!): Book1!,
    removeBook1(id: Int!): String!,
    updateBook1(id: Int!, toUpdate: BookInput1!): Book1!,
  }
`;

export default typeDefs;
