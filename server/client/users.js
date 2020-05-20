const rooms = [];

const addUser = ({id, room}) => {
    room = room.trim().toLowerCase();

    const existingRoom = rooms.find((user) => user.room === room && user.name === name);

    if (!room) return {error: 'room are required'};

    const chamber = {id, room};

    rooms.push(chamber);

    return {chamber};
}

const getUsersInRoom = (room) => rooms.filter(() => room === room);

module.exports = {addUser, getUsersInRoom};