export const schema = `
    type Query {
        hello: String
        bye: String
    }

    type Mutation {
        signUp (firstName: String lastName: String email: String username: String password: String): SignupInput
    }

    type SignupInput {
        firstName: String
        lastName: String
        email: String
        username: String
        password: String
    }
`