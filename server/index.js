const express = require("express");
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const {addUser, getUsersInRoom} = require('./client/rooms');
const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('dist'));
app.use(cors());
app.use(router);

io.on('connection', socket => {
    // console.log('A user connected ' + socket.id);
    // let's user join a room
    socket.on('join', async ({room}, callback) => {
        const {error, user} = addUser({id: socket.id, room});
        console.log(`a user joined the ${room.room}`);
        if (error) return callback(error);

        socket.join(user.room);
        socket.emit('message', {
            user: 'admin',
            text: `${socket.id}, welcome to room ${user.room}.`
        });
        socket.broadcast.to(user.room).emit('message', {
            room: 'admin',
            text: `${socket.id} has joined`
        });

        io.to(user.room).emit('roomData', {room: user.room, user: getUsersInRoom(user.room)});

        callback();
    });

    // log if there is a new user
    socket.on('new user', async (getUser) => {
        console.log('a new user: ' + getUser);
        io.emit('new user', getUser)
    })

    // share the code the user made
    socket.on('share code', async (getData) => {
        console.log('Shared Code: ' + getData);
        io.emit('share code', getData);
    });


    socket.on('disconnect', () => console.log('a user disconnected ' + socket.id));
});


server.listen(PORT, () => console.log('Up and running...'));

