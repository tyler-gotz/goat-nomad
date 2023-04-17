import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { createSchema, createYoga } from 'graphql-yoga'
import * as dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(cors())
app.use(morgan("combined"))

const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */ `
        type Query {
          hello: String
        }
      `,
      resolvers: {
        Query: {
          hello: () => 'world'
        }
      }
    })
})

app.use('/graphql', yoga)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.info(`Server is running on PORT: ${PORT}`)
})