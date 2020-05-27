import socketIo from 'socket.io-client';

/*
you can put this in the 'ENDPOINT'

If you work local work with http://127.0.0.1:3000 or http://localhost:3000
if you work or push to Heroku then use http://dresscode-fun.herokuapp.com/
 */
const ENDPOINT = 'http://dresscode-fun.herokuapp.com/';
const socket = socketIo(ENDPOINT);


export { socket, ENDPOINT }