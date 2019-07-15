import { authorRepository } from '../repository/AuthorsRepo';
import { getCustomRepository } from 'typeorm';

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.

export const resolvers = {
  Query: {
    authors: () => getCustomRepository(authorRepository).getAllAuthors(),
  },
  Mutation: {
    addAuthor: (parent: any, args: {book}) => {
      args = JSON.parse(JSON.stringify(args));
      return getCustomRepository(authorRepository).addAuthor(args.book);
    },
    removeAuthor: (parent: any, args: {id: number}) => getCustomRepository(authorRepository).removeAuthor(args.id),
    updateAuthor: (parent: any, args) => {
      args = JSON.parse(JSON.stringify(args));
      return getCustomRepository(authorRepository).updateAuthor(args.id, args.toUpdate);
    },
  }
};
