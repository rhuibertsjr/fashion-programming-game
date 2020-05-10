
const path = require('path');
const express = require("express");
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const router = require('./routes/router');

app.use(express.static('dist'));
app.use(router);

io.on('connection', socket => {
	console.log('A user connected ' + socket.id);

	socket.on('shareCode', (getData) => {
		console.log(getData);
	});


	socket.on('disconnect', () => console.log('a user disconnected ' + socket.id));
});


server.listen(PORT, () => console.log('Up and running...'));

