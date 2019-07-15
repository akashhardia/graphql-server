import { getCustomRepository } from 'typeorm';
import { BooksRepository } from '../repository/BooksRepo'
import { IupdateBookArgs, Ibook } from '../Book/interfaces';

export const resolvers = {
  Query: {
    books: () => getCustomRepository(BooksRepository).getAllBooks(),
    bookById: (parent: any, args: { id: number }) => getCustomRepository(BooksRepository).getBookById(args.id),
  },
  Mutation: {
    addBook: (parent: any, args: {book: Ibook}) => {
      args = JSON.parse(JSON.stringify(args));
      return getCustomRepository(BooksRepository).addBook(args.book);
    },
    // removeBook: (parent: any, args: {id: number}) => booksRepository.removeBook(args.id),
    // updateBook: (parent: any, args: IupdateBookArgs) => {
    //   args = JSON.parse(JSON.stringify(args));
    //   return booksRepository.updateBook(args.id, args.toUpdate);
    // },
  }
};
