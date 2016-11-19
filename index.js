'use strict'

const {master} = require('ipc-emitter')
const apps = require('./src/apps')
master.ack(...apps)
