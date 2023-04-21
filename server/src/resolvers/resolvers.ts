import { helloQuery } from "./queries/helloQuery"

const queries = {
    ...helloQuery
}

// const mutations = {
    
// }

export const resolvers = {
    Query: {
        ...queries
    },
    // Mutation: {
    //     ...mutations
    // }
}