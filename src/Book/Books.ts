import _ from 'lodash';
import { books } from './data';
 
export class Books {
  public static getAllBooks() {
    return books;
  }

  public static getBook(title: string) {
    return books.find
  }

  public static addBook(title: string, author: string) {
    const book = { author, title };
    books.push(book);
    return book;
  }

  public static removeBook(title: string) {
    const book = Books.getBook(title);
    console.log('removed book', book);
    
  }
}
