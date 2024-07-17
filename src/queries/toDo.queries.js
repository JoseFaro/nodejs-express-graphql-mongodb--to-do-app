export const toDo = {
    list: async (parent, args, context) => {
        return context.prisma.ToDo.findMany({
            include: {
                comments: false,
            }
        })
    },
};