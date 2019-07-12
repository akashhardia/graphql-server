import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Book, books => books.author)
  books: Book[]
}
