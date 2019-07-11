import { Book } from '../entity/Book';
import { Ibook } from './interfaces';
import { getRepository } from 'typeorm';

const getRepositoryFromConnection = () => (getRepository(Book));
 
export class Books {
  public static async getAllBooks() {
    return await getRepositoryFromConnection().find();
  }

  public static async getBook(id: number) {
    return await getRepositoryFromConnection().findOneOrFail(id);
  }

  public static async addBook(book: Ibook) {
    return await getRepositoryFromConnection().save(book);
  } 

  public static async removeBook(id: number) {   
    await Books.getBook(id);
    await getRepositoryFromConnection().delete({ id });
    return `Success deleting book with id:${id}`;   
  }

  public static async updateBook(id: number, toUpdate: Ibook) {    
    await getRepositoryFromConnection().update({ id }, toUpdate); 
    return await Books.getBook(id);    
  }
}
