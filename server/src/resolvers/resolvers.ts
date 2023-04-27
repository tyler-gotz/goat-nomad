import { helloQuery } from "./queries/helloQuery"
import { authMutation } from './mutations/authMutation'

const queries = {
    ...helloQuery
}

const mutations = {
    ...authMutation
}

export const resolvers = {
    Query: {
        ...queries
    },
    Mutation: {
        ...mutations
    }
}