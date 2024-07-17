import express, { Express } from 'express'

import { ApolloServer } from 'apollo-server-express'
import { IApolloContext } from './index.interfaces.js';
import { prisma } from "./config/prisma.ts";
import { resolvers } from './config/resolvers.ts'
import { typeDefs } from './config/typeDefs.js'
 
const port: Number = 3000
const app: Express = express()

const server = new ApolloServer({
  context: ({ req, res }: IApolloContext) => ({ prisma, req, res }),
  resolvers,
  typeDefs,
})

const startServer = async () => {
  await server.start()

  server.applyMiddleware({ app })
    
  app.listen({ port }, () => {
    console.log(`Server started on port: ${port}`)
  });
}

startServer()