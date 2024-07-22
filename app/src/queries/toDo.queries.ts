import { IToDo } from './toDo.interfaces.ts';

export const toDo = {
  add: async (_, args, context): Promise<IToDo> => {
    const { description, title } = args.input;

    return context.prisma.ToDo.create({
      data: {
        description: description,
        title: title,
      },
    });
  },
  delete: async (_, args, context): Promise<IToDo> => {
    const { id } = args;

    return context.prisma.ToDo.delete({
      where: { id },
    });
  },
  get: async (_, args, context): Promise<IToDo> => {
    const { id } = args;

    return context.prisma.ToDo.findUnique({
      where: { id },
    });
  },
  list: async (_, __, context): Promise<IToDo[]> => {
    return context.prisma.ToDo.findMany({
      include: {
        comments: false,
      },
    });
  },
  update: async (_, args, context): Promise<IToDo> => {
    const {
      id,
      input: { description, title },
    } = args;

    return context.prisma.ToDo.update({
      data: {
        description: description,
        title: title,
      },
      where: { id },
    });
  },
};
