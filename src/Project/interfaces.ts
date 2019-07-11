export interface IupdateProjectArgs {
  id: number;
  toUpdate: IProject;
}

export type IProject = {
  name: string;
  manager: string;
}
