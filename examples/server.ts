import express from 'express'
import fdebug from 'debug'
import www from '../src/index'

const app = express()
const debug = fdebug('example:server')

app.get('/', (_, res) => {
	res.status(200).write('wellcome')
	res.end()
})

// "debug" can be null
www(app, debug)
