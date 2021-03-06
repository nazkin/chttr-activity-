const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 8080;
const {addUser,removeUser,getUser,getUsersInRoom} = require('./users'); //helper functions to manage users
const router = require('./router');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(cors());
//***socket.io
//Establishing a connection by the user and allowing the user to disconnect 
io.on('connection', socket => {
    socket.on('join',({name, room}, callback)=>{

        const {error, user} = addUser({id: socket.id, name, room});
        if(error ) return callback(error);
        //Notifying the user and the room about join => send from back end to front-end
        socket.emit('message', {user: 'admin', text: `${user.name} welcome to our chatroom - ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined the room`});
        
        socket.join(user.room);
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
    });
    //User generated message: back-end expects signal from the front-end
    socket.on('sendMessage', (message, callback)=> {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)})
        //Callback handles what will happen after the user has sent the message
        callback();
    })

    socket.on('disconnect', ()=> {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left`});
        }
    });
});

app.use(router);

server.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`);
})