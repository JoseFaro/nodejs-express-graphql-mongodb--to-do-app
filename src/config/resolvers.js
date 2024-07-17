import { dateScalar } from './scalarTypes.js';
import { toDo } from '../queries/toDo.queries.js';

export const resolvers = {
  Date: dateScalar,
  Mutation: {
    addToDo: toDo.add,
    deleteToDo: toDo.delete,
    updateToDo: toDo.update,
  },
  Query: {
    getToDo: toDo.get,
    toDoList: toDo.list,
  },
}