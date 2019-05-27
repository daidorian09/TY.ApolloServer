const winston = require('winston')
const fs = require('fs')
const path = require('path')
const logDir = 'log'

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const systemLogPath = path.join(logDir, 'system.log')
const exceptionLogPath = path.join(logDir, 'exception.log')

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.json(),
      json: false,
      colorize: true,
      timestamp: true
    }),
    new winston.transports.File({
      level: 'info',
      filename: systemLogPath,
      timestamp: true,
      handleExceptions: true,
      json: false
    }),
    new winston.transports.File({
      level: 'error',
      filename: exceptionLogPath,
      timestamp: true,
      handleExceptions: true,
      json: false
    })
  ],
  exitOnError: false
})

logger.stream = {
  write: function (message) {
    logger.info(message)
  }
}

module.exports = logger
