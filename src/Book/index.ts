// import { Books } from '../entity/Books';
// import { Authors } from '../entity/Author';
import { Ibook } from './interfaces';
import { getRepository } from 'typeorm';
 
export class Books {
  // public static async getAllBooks() {
  //   return await getRepository(Book).find({ relations: ['author'] });
  // }

  // public static async getBook(id: number) {
  //   return await getRepository(Book).findOneOrFail(id);
  // }

  // public static async addBook(bookToCreate) {
  //   const [book, author] = [new Book(), new Author()];
  //   book.title = bookToCreate.title;
  //   author.name = bookToCreate.author.name;
  //   book.author = author;
  //   return await getRepository(Book).save(book);
  // }

  // public static async removeBook(id: number) {   
  //   await Books.getBook(id);
  //   await getRepository(Book).delete({ id });
  //   return `Success deleting book with id:${id}`;   
  // }

  // public static async updateBook(id: number, toUpdate) {    
  //   await getRepository(Book).update({ id }, toUpdate); 
  //   return await Books.getBook(id);    
  // }
}
