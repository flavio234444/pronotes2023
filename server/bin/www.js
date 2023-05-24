#!/usr/bin/env node

/**
 * Module dependencies.
 */
//Se importa en app la logica del servidor (Importing the server logic)
//require importa codigo de otro archivo (is used )
import app from '../app';
//Se esta importando una dependecia externa (debug) 
//Manda mensajes como una dependencia externa
//Importing an external dependency
import Debug from 'debug';
const debug = Debug('projnotes')
//Modulo que permite la comunicación con cliente via el protocolo HTTP
import http from 'http';

// Impornting winston logger
import log from '../config/winston';

// Importing config Keys
import configKeys from '../config/configKeys';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(configKeys.port);
//Store the port info in the app 
// app.set('port', port);

/**
 * Create HTTP server.
 */
log.info('The server is created from the express instance');
const server = http.createServer(app); //(entradas)req, res)(acciones en ejecucion)=> {acciones}

/**
 * Listen on provided port, on all network interfaces.
 */
// especifying the port where the server 
server.listen(port);
//attaching callbacks to events 
server.on('error', onError);

server.on('listening', onListening);

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
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      log.error(`${bind} is already in use`);
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
  log.info(`⭐⭐ Listening on ${process.env.APP_URL}:${addr.port} ⭐⭐`);
}

