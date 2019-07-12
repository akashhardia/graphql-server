import { IAuthor, IupdateAuthorArgs } from '../Author/interfaces';
import { Author } from '../Author';

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.

export const resolvers = {
  Query: {
    authors: () => Author.getAllAuthors(),
  },
  Mutation: {
    addAuthor: (parent: any, args: {book: IAuthor}) => {
      args = JSON.parse(JSON.stringify(args));
      return Author.addAuthor(args.book);
    },
    removeAuthor: (parent: any, args: {id: number}) => Author.removeAuthor(args.id),
    updateAuthor: (parent: any, args: IupdateAuthorArgs) => {
      args = JSON.parse(JSON.stringify(args));
      return Author.updateAuthor(args.id, args.toUpdate);
    },
  }
};
