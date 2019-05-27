const logger = require('../logger/logger')
const axios = require('axios')

const httpRequest = function sendHttpRequest (endpoint, mutationQueryString) {
  return new Promise(function (resolve, reject) {
    logger.info('sendHttpRequest is called')
    try {
      const response = axios({
        method: 'post',
        url: endpoint,
        data: {
          query: mutationQueryString
        },
        timeout: 20000
      })
      resolve(JSON.parse(response))
    } catch (error) {
      logger.error(`sendHttpRequest failed : \n"${JSON.stringify(error, null, 4)}`)
      throw new Error(error.message)
    }
  })
}

module.exports = httpRequest
