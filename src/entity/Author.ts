import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { book } from "./Book";

@Entity('authors')
export class author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => book, books => books.author)
  books: book[]
}
