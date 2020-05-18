import socketIo from 'socket.io-client';

const ENDPOINT = 'https://dresscode-fun.herokuapp.com:3000/';
const socket = socketIo(ENDPOINT);

export {socket}