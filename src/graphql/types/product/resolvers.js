const restClient = require('../../../utils/http/rest-client')
const graphqlQueryBuilder = require('../../../utils/builder/graphql-query-builder')
const GraphqlQuery = require('../../../models/GraphQLQuery')
const logger = require('../../../utils/logger/logger')

const resolvers = {

  // #region Query
  Query: {
    getProductById (root, args, context, info) {
      return new Promise((resolve, reject) => {
        logger.info('getProductById is called')

        const model = new GraphqlQuery('getProductById', args, info, 'query')

        const queryString = graphqlQueryBuilder(model)

        const graphqlBackendEndpoint = process.env.BACKENDENDPOINT

        restClient(graphqlBackendEndpoint, queryString).then((data) => {
          if (!data.data.getProductById.data) {
            logger.error(`getProductById null response: \n"${JSON.stringify(data, null, 4)}`)
          }
          resolve(data.data.getProductById)
        }).catch((err) => {
          logger.error(`getProductById failed: \n"${JSON.stringify(err, null, 4)}`)
          reject(new Error(err))
        })
      })
    }
  },
  // #endregion

  // #region Mutation
  Mutation: {
    createProduct (root, args, context, info) {
      return new Promise((resolve, reject) => {
        logger.info('createProduct is called')

        const model = new GraphqlQuery('createProduct', args, info, 'mutation')

        const queryString = graphqlQueryBuilder(model)

        const graphqlBackendEndpoint = process.env.BACKENDENDPOINT

        restClient(graphqlBackendEndpoint, queryString).then((data) => {
          if (!data.data.createProduct.data) {
            logger.error(`createProduct null response: \n"${JSON.stringify(data, null, 4)}`)
          }
          resolve(data.data.createProduct)
        }).catch((err) => {
          logger.error(`createProduct failed: \n"${JSON.stringify(err, null, 4)}`)
          reject(new Error(err))
        })
      })
    }
  }
  // #endregion
}

module.exports = resolvers
