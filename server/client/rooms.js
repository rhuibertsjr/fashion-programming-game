const rooms = [];

const addUser = ({id, room}) => {
    room = room.trim().toLowerCase();

    if (!room) return {error: 'room are required'};

    const chamber = {id, room};

    rooms.push(chamber);

    console.log(chamber);
    return {chamber};
}

const getUser = (id) => rooms.find((chamber) => chamber.id === id);

const getUsersInRoom = (room) => rooms.filter((chamber) => chamber.room === room);

module.exports = {addUser, getUser, getUsersInRoom};