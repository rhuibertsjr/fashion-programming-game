import socketIo from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:3000';
const socket = socketIo(ENDPOINT);


export { socket }