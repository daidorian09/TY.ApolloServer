const { makeExecutableSchema } = require('graphql-tools')

// Type Definitions
const productTypeDefs = require('./types/product/typeDefs')
const orderTypeDefs = require('./types/order/typeDefs')


// Product Resolvers
const productResolvers = require('./types/product/resolvers')

// Order Resolvers
const orderResolvers = require('./types/order/resolvers')

const query = `
#TY Apollo Server Graphql Queries
type Query {
  ${productTypeDefs.query.join(',')},
  ${orderTypeDefs.query.join(',')}

}`

const mutation = `
#TY Apollo Server Graphql Mutations
type Mutation {
  ${productTypeDefs.mutation.join(',')}
}`

const typeDefs = [
  productTypeDefs.typeDefs,
  orderTypeDefs.typeDefs,
  query,
  mutation
]

const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...orderResolvers.Query
  },
  Mutation: {
    ...productResolvers.Mutation
  }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
