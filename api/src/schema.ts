import { gql } from "apollo-server";

export const typeDefs = gql`
  type Project {
    id: Int
    name: String
  }

  type Query {
    hello: String
    allProjects: [Project]
    helloJess: String
  }

  input ProjectInput {
    name: String!
  }

  input ProjectPatchInput {
    id: Int!
    name: String!
  }

  type Mutation {
    addProject(project: ProjectInput!): Project
    updateProject(patch: ProjectPatchInput!): Project
  }
`;

export default typeDefs;