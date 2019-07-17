import { author } from '../entity/Author';
import { book } from '../entity/Book';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(author)
export class authorRepository extends Repository<author> {
  async getAllAuthors() {    
    return await this.find({ relations: ['books'] });
  }

  async getAuthorById(id: number) {
    return await this.findOneOrFail(id);
  }

  async addAuthor(authorToCreate) {
    const [newBook, newAuthor] = [new book(), new author()];
    newAuthor.name = authorToCreate.name;    
    newBook.title = authorToCreate.book;
    newAuthor.books = [newBook];
    return await this.save(newAuthor);
  }
  
  async updateAuthor(id: number, toUpdate) {
    
  }

  async removeAuthor(id: number) {

  }
}
