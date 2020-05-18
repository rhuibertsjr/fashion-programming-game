import socketIo from 'socket.io-client';

const ENDPOINT = 'https://dresscode-fun.herokuapp.com/';
const socket = socketIo(ENDPOINT);

export {socket}