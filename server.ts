import express = require('express');
import sockets = require('socket.io');
import http = require('http');
import Socket from './sockets';


const app = express();
const server = http.createServer(app);

// Use Angular CLI's output dir for static files
app.use(express.static('charts/dist'));


// Start express server on port 3000
server.listen(3000, () => {
    console.log("App listening on port 3000");
});

// Instantiate websockets
const io = new Socket(server);
