
const express = require("express");
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const {addUser, removeUser, getUser, getUsersInRoom} = require('./client/rooms');

const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'));
app.use(cors());
app.use(router);

io.on('connection', socket => {
    const {id} = socket.client;
    console.log('A user connected: ' + id);
    // let's user join a room
    socket.on('join',  ({room}, callback) => {

        const {error, user} = addUser({id: id, room});
        if (error) return callback(error);
        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        console.log('a user joined the: ' + room);

        callback();
    });

    // Chat
    socket.on('chat message', msg => {
        console.log(`${id}: ${msg}`);
        io.emit('chat message', {id, msg});
    });

    // share the code the user made
    socket.on('share code',  (getData) => {
        console.log('Shared Code: ' + getData);
        io.emit('share code', getData);
    });

    // log if there is a new user
    socket.on('new user', async (getUser) => {
        console.log('a new user: ' + getUser);
        io.emit('new user', getUser)
    });




    socket.on('disconnect', () => console.log('a user disconnected ' + id));
});


server.listen(PORT, () => console.log('Up and running...'));

