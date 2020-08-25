import express from 'express'
import www from '../src/index'

import fdebug from 'debug' // optional
import path from 'path' // optional
import cookieParser from 'cookie-parser' // optional
import logger from 'morgan' // optional

const app = express()

const debug = fdebug('example:server') // optional

app.use(logger('dev')) // optional
app.use(express.json()) // optional
app.use(express.urlencoded({ extended: false })) // optional
app.use(cookieParser()) // optional
app.use(express.static(path.join(__dirname, 'public'))) // optional

app.get('/', (_, res) => {
	res.status(200).write('wellcome')
	res.end()
})

// "debug" is optional (default value: null)
www(app, debug)
