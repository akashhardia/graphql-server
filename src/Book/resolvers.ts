import { Books } from './Books'

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => Books.getAllBooks()
  },
  Mutation: {
    addBook: (parent: any, args: {[key: string]: any}) => {
      return Books.addBook(args.title, args.author);
    },
    removeBook: (parent: any, args: {[key: string]: any}) => {
      return Books.removeBook(args.title);
    }
  }
};
