import { hello } from "./model/hello";
import {helloJess} from "./model/helloJess";
import { allProjects, addProject, updateProject, Project } from "./model/project";

type ProjectArgsType = { project: any };
type ProjectUpdateArgsType = { patch: Project };

export const resolvers: any = {
  Mutation: {
    addProject: (root: any, args: ProjectArgsType) => addProject(args),
    updateProject: (root: any, args: ProjectUpdateArgsType) => updateProject(args)
  },
  Query: {
    hello,
    helloJess,
    allProjects: (root: any, args: ProjectArgsType) => allProjects()
  }
}

export default resolvers;