import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

async function main() {
  const app = express()
  const httpServer = http.createServer(app)
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()

  app.use(
    cors(),
    bodyParser.json(),
    morgan("combined"),
    expressMiddleware(server),
  )

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => {
    console.info(`Server is running on PORT: ${PORT}`)
  })
}

main()
