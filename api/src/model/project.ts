// import db from "../database/db.json";
import { readData, writeData } from "../database/util";

export type Project = {
  id?: number;
  name: string;
};

type Projects = Project[];

export const allProjects = () => {
  return readData() as Projects;
}

export const addProject = ({ project: { name } }: {project: Project}) => {
  const data = readData() as Projects;
  const id = data.length + 1;
  writeData([...data, { id, name }]);
  return { id , name };
}

export const updateProject = ({patch: { id, name }}: { patch: Project}) => {
  const data = readData() as Projects;
  let updatedArray = [];
//iterate through existing data
  //push new data to new array; don't push data[i].id
  for (let i = 0; i < data.length; i++) {
    if (id != data[i].id) {
      updatedArray.push(data[i]);

      //write new data to new initialized object  -- save the data
    }
    else{
      updatedArray.push({id, name});
    }
  }
  return updatedArray;

  // iterate through the projects array using a loop,
  // delete this object from the array
  // save this modified array back to the json file
  //
  // example of returning a mock project
  // return { id: 0, name: 'HELLO' };
}
