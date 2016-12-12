'use strict'

const {fork} = require('child_process')
const config = require('../../config')

const args = [
  '--dbURL', config.db.url,
  '--sessionCookie', config.session.cookie,
  '--sessionMaxAge', config.session.maxAge,
  '--port', config.api.port,
  '--instances', config.api.instances
]

module.exports = fork(config.api.file, args)
