const { makeExecutableSchema } = require('graphql-tools')

// Type Definitions
const productTypeDefs = require('./types/product/typeDefs')

// Product Resolvers
const productResolvers = require('./types/product/resolvers')

const query = `
#TY Apollo Server Graphql Queries
type Query {
  ${productTypeDefs.query.join(',')}
}`

const mutation = `
#TY Apollo Server Graphql Mutations
type Mutation {
  ${productTypeDefs.mutation.join(',')}
}`

const typeDefs = [
  productTypeDefs.typeDefs,
  query,
  mutation
]

const resolvers = {
  Query: {
    ...productResolvers.Query
  },
  Mutation: {
    ...productResolvers.Mutation
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
