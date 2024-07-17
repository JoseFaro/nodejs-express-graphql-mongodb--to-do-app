import { toDo } from '../queries/toDo.queries.js';

export const resolvers = {
  Date: dateScalar,
  Query: {
    toDoList: toDo.list,
  }
}