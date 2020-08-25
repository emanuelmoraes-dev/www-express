import http from 'http'
import https from 'https'
import { Express } from 'express-serve-static-core'

type Reject = (reason?: any) => void
type Resolve = (value?: unknown) => void
type Server = http.Server | https.Server

/**
 * boot server
 * @param {Express} app - Express instance
 * @param {Function=} - debug function
 * @param {boolean=} security - if true, https will be used instead of http. Default value: false
 */
export const www = async (app: Express, debug: Function = null, security: boolean = false) => new Promise((resolve: Resolve, reject: Reject) => {
	const port = normalizePort(process.env.PORT || '3000')
	app.set('port', port)

	let server: Server

	if (security)
		server = https.createServer(app)
	else
		server = http.createServer(app)

	server.listen(port)
	server.on('error', (err: any) => onError(err, port, reject))
  	server.on('listening', () => onListening(server, debug, resolve))
})

/**
 * Normalize a port into a number, string, or false
 * @param {any} val - port value
 */
function normalizePort(val: any): any {
	var port = parseInt(val, 10)

	if (Number.isNaN(port)) {
		// named pipe
		return val
	}

	if (port >= 0) {
		// port number
		return port
	}

	return false
}

/**
 * Event listener for HTTP server "error" event
 * @param {any} error - error initializing server
 * @param {any} port - error initializing server
 * @param {(reason?: any) => void} reject - Promise Rejection Function
 */
function onError(error: any, port: any, reject: Reject) {
	reject(error)

	if (error.syscall !== 'listen') {
		throw error
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges')
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(bind + ' is already in use')
			process.exit(1)
			break
		default:
			throw error
	}
}

/**
 * Event listener for HTTP server "listening" event.
 * @param {http.Server | https.Server} server - http or https server instance
 * @param {Function} debug - debug function
 * @param {(value?: unknown) => void} resolve - Promise Acceptance Function
 */
function onListening(server: Server, debug: Function, resolve: Resolve) {
	var addr = server.address()
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port
	if (typeof debug === 'function')
		debug('Listening on ' + bind)
	resolve()
}
