import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => Author, author => author.books, { cascade: true })
  author: Author;
}
