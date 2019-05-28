const restClient = require('../../../utils/http/rest-client')
const graphqlQueryBuilder = require('../../../utils/builder/graphql-query-builder')
const GraphqlQuery = require('../../../models/GraphQLQuery')
const logger = require('../../../utils/logger/logger')

const resolvers = {

  // #region Query
  Query: {
    getOrderById (root, args, context, info) {
      return new Promise((resolve, reject) => {
        logger.info('getOrderById is called')

        const model = new GraphqlQuery('getOrderById', args, info, 'query')

        const queryString = graphqlQueryBuilder(model)

        const graphqlBackendEndpoint = process.env.BACKENDENDPOINT

        restClient(graphqlBackendEndpoint, queryString).then((data) => {
          if (!data.data.getOrderById) {
            logger.error(`getOrderById null response: ${JSON.stringify(data, null, 4)}`)
          }
          resolve(data.data.getOrderById)
        }).catch((err) => {
          logger.error(`getOrderById failed: ${JSON.stringify(err.stack, null, 4)}`)
          reject(new Error(err))
        })
      })
    }
  }
  // #endregion
}

module.exports = resolvers
