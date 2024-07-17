import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date
  
  type ToDo {
    id: Int!
    description: String
    title: String

    comments: [Comment]
    createdAt: Date
    updatedAt: Date
  }

  type Comment {
    id: Int
    comment: String
  }

  type Query {
    toDoList: [ToDo]
  }
`