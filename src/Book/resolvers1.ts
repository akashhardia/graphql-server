import { Books } from './Books';
import { IupdateBookArgs, Ibook } from './interfaces';

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.

export const resolvers1 = {
  Query: {
    books1: () => Books.getAllBooks(),
  },
  Mutation: {
    addBook1: (parent: any, args: {book: Ibook}) => {
      args = JSON.parse(JSON.stringify(args));
      return Books.addBook(args.book);
    },
    removeBook1: (parent: any, args: {id: number}) => Books.removeBook(args.id),
    updateBook1: (parent: any, args: IupdateBookArgs) => {
      args = JSON.parse(JSON.stringify(args));
      return Books.updateBook(args.id, args.toUpdate);
    },
  }
};
