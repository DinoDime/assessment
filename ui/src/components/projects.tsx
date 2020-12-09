import React, {useState, useEffect} from 'react';
import { useQuery, gql } from '@apollo/client';

interface AllProjects {
  id: number;
  name: string;
}
interface AllProjectsData {
  allProjects: AllProjects[];
}

interface AllProjectsVars {
  id: number;
  name: string;
}
const allProjects = gql`
{
  allProjects{
    id,name
  }
}
`;

function Projects() {

  const {loading, data} = useQuery<AllProjectsData, AllProjectsVars>
  (allProjects);

  if (loading) {
    return <div>Loading...</div>

  }
  console.log(data);







//make array for data
  // make var
  // looping and appending to array
  // return array
  // return array

  /*

      Use similar query syntax to the hello query in the App.tsx file to get the list of projects from that API.
      Reference: https://www.apollographql.com/docs/react/get-started/#request-data



  */

  const newVar = "somestring";
  const myFunction = (number: number) => {
    return number + number;
  }

// access the list
  // iterate through list
  // save the contents of the list in a readable format
  //return said list contents

  return (
    <div className="Projects">

      <h3>Projects List</h3>
      {loading ? (
          <p>Loading ...</p>
      ) : (
          <table>
            <thead>
            <tr>
              <th>Project Name</th>
              <th>Id</th>
            </tr>
            </thead>
            <tbody>
            {data && data.allProjects.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.id}</td>
                </tr>
            ))}
            </tbody>
          </table>
      )}

    </div>
  );
}

export default Projects;
