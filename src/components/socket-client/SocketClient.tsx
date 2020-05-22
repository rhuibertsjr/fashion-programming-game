import socketIo from 'socket.io-client';

// If you work local change to http://localhost:3000/ or http://127.0.0.1:3000/
// If you are going to push to Heroku than put https://dresscode-fun.herokuapp.com/

const ENDPOINT = 'https://dresscode-fun.herokuapp.com';
const socket = socketIo(ENDPOINT);

export {socket}