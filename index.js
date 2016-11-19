'use strict'

const {master} = require('ipc-emitter')
const apps = require('./apps')
master.ack(...apps)
