import * as _ from 'lodash';
import { getRepository } from 'typeorm';
import { Book } from '../entity/Book';

const getRepositoryFromConnection = () => {
  return getRepository(Book);
}
 
export class Books {
  public static async getAllBooks() {
    return await getRepositoryFromConnection().find();
  }

  public static async getBook(id: number) {
    return await getRepositoryFromConnection().findOne(id);
  }

  public static async addBook(title: string, author: string) {
    const book = new Book();
    book.title = title;
    book.author = author;
    await getRepositoryFromConnection().save(book);
    return book;
  } 

  public static async removeBook(title: string) {
    console.log('deleted', await getRepositoryFromConnection().delete(title));
    return 'OK';
  }

  public static async updateBook() {
    // return await getRepositoryFromConnection().update(); 
  }
}
