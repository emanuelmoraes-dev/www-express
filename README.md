# www-express

Simple utility that provides a function that loads a express js application with JavaScript/TypeScript

## Examples

### Simple Example

```js
import express from 'express'
import { www } from 'www-express'

const app = express()

app.get('/', (_, res) => {
	res.status(200).write('wellcome')
	res.end()
})

www(app).catch(console.error)
```

### Most Complete Example

```js
import express from 'express'
import { www } from 'www-express'

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
www(app).catch(console.error)
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

### Run With Debug Package (Unix Like)

```sh
DEBUG=example:* node example.js
```

### Run With Debug Package (Windows)

```sh
set DEBUG=example:* & node example.js
```