import { Project } from '../entity/Project';
import { IProject } from './interfaces';
import { getRepository } from 'typeorm';

const getRepositoryFromConnection = () => getRepository(Project);
 
export class Projects {
  public static async getAllProjects() {
    return await getRepositoryFromConnection().find();
  }

  public static async getProject(id: number) {
    return await getRepositoryFromConnection().findOneOrFail(id);
  }

  public static async addProject(project: IProject) {
    return await getRepositoryFromConnection().save(project);
  } 

  public static async removeProject(id: number) {   
    await Projects.getProject(id);
    await getRepositoryFromConnection().delete({ id });
    return `Success deleting project with id:${id}`;   
  }

  public static async updateProject(id: number, toUpdate: IProject) {    
    await getRepositoryFromConnection().update({ id }, toUpdate); 
    return await Projects.getProject(id);    
  }
}
