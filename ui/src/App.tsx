import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Projects from "./components/projects";

import './App.css';


/*const helloQuery = gql`
{
  hello
}
`;
*/

const helloQuery = gql`{
  helloJess
}`;

function App() {

  /* 

    EXAMPLE

    Hello API Query

  */
  console.log(useQuery(helloQuery));

  const {loading, error, data} = useQuery(helloQuery);
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const { helloJess } = data
  console.log(`Hello ${helloJess}`);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/* Here we print the value of the returned API query to the page */}        
        <p>Hello {helloJess}</p>
        <Projects />
      </header>
    </div>
  );
}

export default App;
