const express = require('express');
const createError = require('http-errors');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const cors = require ('cors');
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);


// Index needed to create the api definition
const indexRouter = require('./backend/routes/index');
app.use(cors())
/**
 * Create HTTP server.
 */
//we limit the body of requests to 20 mb to body parser
app.use(bodyParser.json({
    limit: '20mb'
}));

const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/*Create the root*/
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Router
indexRouter.createAPIRouteDefintion(app);

app.use(function (req, res, next) {
    next(createError(404));
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);
}