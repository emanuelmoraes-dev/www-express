# www-express

Simple utility that provides a function that loads a express js application with JavaScript/TypeScript

## Example

### Code

```js
import express from 'express'
import www from 'www-express'
import fdebug from 'debug' // optional

const app = express()
const debug = fdebug('example:server') // optional

app.get('/', (_, res) => {
	res.status(200).write('wellcome')
	res.end()
})

// "debug" can be null
www(app, debug)
```

### Run (Deafult Port: 3000)

```sh
node example.js
```

### Run By Changing The Default Port (Unix Like)

```sh
PORT=3001 node example.js
```

### Run By Changing The Default Port (Windows)

```sh
set PORT=3001 & node example.js
```

### Run With Debug (Unix Like)

```sh
DEBUG=example:* node example.js
```

### Run With Debug (Windows)

```sh
set DEBUG=example:* & node example.js
```