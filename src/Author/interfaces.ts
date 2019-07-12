import { Ibook } from '../Book/interfaces';

export interface IupdateAuthorArgs {
  id: number;
  toUpdate: IAuthor;
}

export type IAuthor = {
  name: string;
  books: Ibook[];
}
