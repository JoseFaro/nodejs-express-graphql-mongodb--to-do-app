import { GraphQLScalarType, Kind } from 'graphql';

const config = {
  description: 'Date custom scalar type',
  name: 'Date',
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }

    // Invalid hard-coded value (not an integer)
    return null;
  },
  parseValue(value) {
    if (typeof value === 'number') {
      return new Date(value); // Convert incoming integer to Date
    }

    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }

    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
};

export const dateScalar = new GraphQLScalarType(config);
