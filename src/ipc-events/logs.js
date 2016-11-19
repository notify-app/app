'use strict'

const logger = require('../logger')

module.exports = (master) => {
  master.on('logs:error', (...payload) => {
    logger.error(...payload)
  })

  master.on('logs:warn', (...payload) => {
    logger.warn(...payload)
  })

  master.on('logs:info', (...payload) => {
    logger.info(...payload)
  })

  master.on('logs:verbose', (...payload) => {
    logger.verbose(...payload)
  })

  master.on('logs:debug', (...payload) => {
    logger.debug(...payload)
  })

  master.on('logs:silly', (...payload) => {
    logger.silly(...payload)
  })
}
