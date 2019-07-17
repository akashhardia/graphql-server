import { book } from '../entity/Book';
import { authorRepository } from './AuthorsRepo';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(book)
export class BooksRepository extends Repository<book> {
  async getAllBooks() {
    return await this.find({ relations: ['author'] });
  }

  async getBookById(id: number) {
    return await this.findOneOrFail(id);
  }

  async addBook(bookToCreate) {
    const newBook = new book();
    newBook.title = bookToCreate.title;
    newBook.author = await this.manager.getCustomRepository(authorRepository).getAuthorById(bookToCreate.authorId);
    return await this.save(newBook);
  }
  
  async updateBook(id: number, toUpdate) {
    await this.update({ id }, toUpdate); 
    return await this.getBookById(id);   
  }

  async removeBook(id: number) {
    await this.getBookById(id);
    await this.delete({ id });
    return `Success deleting book with id:${id}`;
  }
}
