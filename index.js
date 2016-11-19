'use strict'

const {master} = require('ipc-emitter')
const apps = require('./src/apps')
const events = require('./src/ipc-events')
master.ack(...apps)
events.forEach(event => event(master))
