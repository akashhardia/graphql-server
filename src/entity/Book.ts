import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { author } from "./Author";

@Entity('books')
export class book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => author, author => author.books, { cascade: true })
  author: author;
}
  