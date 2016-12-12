'use strict'

const {fork} = require('child_process')
const config = require('../../config')

const args = [
  '--dbURL', config.db.url,
  '--sessionName', config.session.cookie,
  '--sessionMaxAge', config.session.maxAge,
  '--port', config.ws.port,
  '--instances', config.ws.instances
]

module.exports = fork(config.ws.file, args)
