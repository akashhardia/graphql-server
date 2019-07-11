export interface IupdateBookArgs {
  id: number;
  toUpdate: Ibook;
}

export type Ibook = {
  title: string;
  author: string;
}
