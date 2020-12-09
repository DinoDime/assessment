## Junior Dev Assessment: Demonstrate the ability to use NPM, Typescript/Javascript, React, and be able to minimally extend a GraphQL API

### Notes

We want to see what you know and what your strengths are. This is simplified version of the ecosystem that we work in every day so it's important to have some experience with the tools and technologies we work with. 

If you feel more comfortable focusing on the backend or testing, vs the front-end, focus more energy where you're most interested. 


### Tasks

* Create a Fork of this repository under your Github account
* Create a new branch to work from locally and publish this branch 
* Create a GraphQL Query to return your name. Hint, you should be able to model this off the hello query. Look in `src/schema.ts`, `src/resolvers.ts`, and `src/model/hello.ts`
* Fill in the rest of the `updateProject` mutation here: api/src/model/project.ts
* Create a react module to display the list
* Commit and push your final work back to Github and let us know


* Bonus: write some unit tests using JEST

### Evaluation

* Communication
* Basic terminal knowledge
* Git & Github Workflows
* Node and NPM (Node Package Management)
* Typescript/Javascript - Should be able to look at examples and apply those to solve similar problems
* API (GraphQL) - Asynchronously fetch data from an API
* React/Front-end - Basic HTML and react components
* Ability to find solutions to a problem via documentation

Note: all of the above, excluding, git/Github, should have examples to guide you along. If something isn't clear though, please reach out for further assistance or explanation. Communication is as much a part of this assessment as the end result. 


### Prerequisites
* git
* npm 
* github account


1. Running the API Dev Server

```
$ cd api
$ npm install
$ npm run start
```

Open the graphql playground via http://localhost:4000


2. Running the UI Server

```
# Open a new tab or window in your terminal

$ cd ui
$ npm install
$ npm run start
```


Open the ui via http://localhost:3000 (this should automatically launch for you)


### Example graphql queries
* you can copy/paste into the playground - move your cursor inside of the syntax and click the play button or Command + return

```
query hello {
  hello
}
```

RETURNS
```
{
  "data": {
    "hello": "world"
  }
}
```

---


```
query allProjects {
  allProjects{
    id,name
  }
}
```
RETURNS
```
{
  "data": {
    "allProjects": [
      {
        "id": 1,
        "name": "Swiss Cheese"
      },
      {
        "id": 2,
        "name": "Swiss Army Knives"
      },
      {
        "id": 3,
        "name": "Swiss chard"
      }
    ]
  }
}

```

---


```
mutation addProject{
  addProject(project:{name:"Erin"}){
    id, name
  }
}
```
RETURNS
```
{
  "data": {
    "addProject": {
      "id": 4,
      "name": "NEW FUN PROJECT"
    }
  }
}
```

---


TODO: This mutation needs to be completed.
```
mutation updateProject {
  updateProject(patch:{id:1, name:"HELLO"}){
    id, name
  }
}
```

---

## Additional Resources

* Typescript Docs https://www.typescriptlang.org/docs/
* ReactJS Getting Started : https://reactjs.org/docs/getting-started.html
* React Hooks https://reactjs.org/docs/hooks-intro.html
* GraphQL https://graphql.org/learn/
* Apollo GraphQL Requesting Data : https://www.apollographql.com/docs/react/get-started/#request-data
