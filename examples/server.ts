import express from 'express'
import _debug from 'debug'
import www from '../src/index'

const app = express()
const debug = _debug('example:server')

app.get('/', (_, res) => {
	res.status(200).write('wellcome')
	res.end()
})

www(app, debug)
