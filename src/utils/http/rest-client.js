const logger = require('../logger/logger')
const axios = require('axios')

const httpRequest = function sendHttpRequest (endpoint, graphQLQueryString) {
  return new Promise(function (resolve, reject) {
    logger.info('sendHttpRequest is called')
    try {
      axios({
        method: 'post',
        url: endpoint,
        data : {
          "query" : graphQLQueryString
        },
        timeout : 20000,
      }).then(resp => {
        if(resp && resp.status === 200 && resp.data) {
          return resolve(resp.data) 
        } 
        return reject(new Error())
      }).catch(err => {
        logger.error(`axios failed : ${JSON.stringify(err.stack, null, 4)}`)
        return reject(new Error(err.message))
      })   
    } catch (error) {
      logger.error(`sendHttpRequest failed : ${JSON.stringify(error, null, 4)}`)
      throw new Error(error.message)
    }
  })
}

module.exports = httpRequest
