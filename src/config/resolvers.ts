import { dateScalar } from '../utils/prismaTypes/scalarTypes.js';
import { toDo } from '../queries/toDo.queries.ts';

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