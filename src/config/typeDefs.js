import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date
  
  type ToDo {
    id: String
    description: String
    title: String

    comments: [Comment]
    createdAt: Date
    updatedAt: Date
  }

  type Comment {
    id: String
    comment: String
  }

  type Query {
    getToDo(id: String): ToDo
    toDoList: [ToDo]
  }

  type Mutation {
    addToDo(input: ToDoInput): ToDo
    deleteToDo(id: String): ToDo
    updateToDo(id: String input: ToDoInput): ToDo
  }

  input ToDoInput {
    description: String
    title: String
  }
`