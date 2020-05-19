import socketIo from 'socket.io-client';

const ENDPOINT = 'localhost:3000';
const socket = socketIo(ENDPOINT);


export { socket }