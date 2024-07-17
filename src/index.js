import express from 'express'

import { ApolloServer  } from 'apollo-server-express'
import { prisma } from "./config/prisma.js";
import { typeDefs } from './config/typeDefs.js'
import { typeDefs, resolvers } from './config/resolvers.js'

const port = 3000
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ prisma, req, res }),
})

const startServer = async () => {
  await server.start()

  server.applyMiddleware({ app })
    
  app.listen({ port }, () => {
    console.log(`Server started on port: ${port}`)
  });
}

startServer()