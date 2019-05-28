const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const graphqlHTTP = require('express-graphql')
const { graphiqlExpress } = require('graphql-server-express')
const schema = require('../src/graphql/schemas')
const logger = require('../src/utils/logger/logger')
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '/.env')})

// Initialize the app
const app = express()

// #region Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

// The GraphQL endpoint
app.use('/graphql', graphqlHTTP((request, response, graphQLParams) => ({
    schema: schema,
    context: {
      request: request
    }
  }))
)

// GraphiQL, a visual editor for queries
if (process.env.ENVIRONMENT !== 'prod') {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
}

// #endregion

const graphQLPort = process.env.PORT

if(!graphQLPort) {
  logger.error('GraphQL Port is missing')
} else {
  // Start the server
  app.listen(graphQLPort, () => {
    logger.info(`🚀 GraphQL Server is now running on http://localhost:${graphQLPort}/graphiql`)
  })
}

