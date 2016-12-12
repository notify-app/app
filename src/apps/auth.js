'use strict'

const {fork} = require('child_process')
const config = require('../../config')

const args = [
  '--dbURL', config.db.url,
  '--sessionCookie', config.session.cookie,
  '--sessionMaxAge', config.session.maxAge,
  '--port', config.auth.port,
  '--instances', config.auth.instances
]

module.exports = fork(config.auth.file, args)
