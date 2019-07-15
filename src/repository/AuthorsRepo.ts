import { author } from '../entity/Author';
import { book } from '../entity/Book';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(author)
export class authorRepository extends Repository<author> {
  async getAllAuthors() {    
    return await this.find({ relations: ['books'] });
  }

  async addAuthor(authorToCreate) {
    const [newBook, newAuthor] = [new book(), new author()];
    newAuthor.name = authorToCreate.name;    
    newBook.title = authorToCreate.book.title;
    newAuthor.books.push(newBook);
    return await this.manager.save(book);
  }
  
  async updateAuthor(id: number, toUpdate) {
    
  }

  async removeAuthor(id: number) {

  }
}
