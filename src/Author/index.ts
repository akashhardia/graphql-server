import { Book } from '../entity/Book';
import { getRepository } from 'typeorm';
 
export class Author {
  public static async getAllAuthors() {
    return await getRepository(Book).find({ relations: ['books'] });
  }

  public static async getAuthor(id: number) {
    return await getRepository(Book).findOneOrFail(id);
  }

  public static async addAuthor(book) {
    return await getRepository(Book).save(book);
  }

  public static async removeAuthor(id: number) {   
    await Author.getAuthor(id);
    await getRepository(Book).delete({ id });
    return `Success deleting book with id:${id}`;   
  }

  public static async updateAuthor(id: number, toUpdate) {    
    await getRepository(Book).update({ id }, toUpdate); 
    return await Author.getAuthor(id);    
  }
}
