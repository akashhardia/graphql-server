import { Books } from '../Book';
import { IupdateBookArgs, Ibook } from '../Book/interfaces';

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.

export const resolvers = {
  Query: {
    books: () => Books.getAllBooks(),
  },
  Mutation: {
    addBook: (parent: any, args: {book: Ibook}) => {
      args = JSON.parse(JSON.stringify(args));
      return Books.addBook(args.book);
    },
    removeBook: (parent: any, args: {id: number}) => Books.removeBook(args.id),
    updateBook: (parent: any, args: IupdateBookArgs) => {
      args = JSON.parse(JSON.stringify(args));
      return Books.updateBook(args.id, args.toUpdate);
    },
  }
};
