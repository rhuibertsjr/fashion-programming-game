
const path = require('path');
const express = require("express");
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client/build'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

server.listen(PORT, () => {
	console.log('Up and running...')
});

