import express from 'express'

import { ApolloServer  } from 'apollo-server-express'
import { prisma } from "./config/prisma.js";
import { resolvers } from './config/resolvers.js'
import { typeDefs } from './config/typeDefs.js'

const port = 3000
const app = express()

const server = new ApolloServer({
  context: ({ req, res }) => ({ prisma, req, res }),
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