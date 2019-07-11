import { Projects } from '../Project';
import { IProject, IupdateProjectArgs } from '../Project/interfaces';

export const resolvers = {
  Query: {
    project: () => Projects.getAllProjects(),
  },
  Mutation: {
    addProject: (parent: any, args: {project: IProject}) => {
      args = JSON.parse(JSON.stringify(args));
      console.log('resolver,args:::', args);
      return Projects.addProject(args.project);
    },
    removeProject: (parent: any, args: {id: number}) => Projects.removeProject(args.id),
    updateProject: (parent: any, args: IupdateProjectArgs) => {
      args = JSON.parse(JSON.stringify(args));
      return Projects.updateProject(args.id, args.toUpdate);
    },
  }
};
