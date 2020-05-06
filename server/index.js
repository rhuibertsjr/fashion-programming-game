
const express = require("express");
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
	console.log('Up and running...')
});

