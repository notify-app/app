'use strict'

const {fork} = require('child_process')
const config = require('../../config')

const args = [
  '--dbURL', config.db.url,
  '--sessionName', config.session.name,
  '--sessionMaxAge', config.session.maxAge,
  '--port', config.api.port,
  '--instances', config.api.instances
]

module.exports = fork(config.api.file, args)
