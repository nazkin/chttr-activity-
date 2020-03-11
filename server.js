const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 8080;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//***socket.io
//Establishing a connection by the user and allowing the user to disconnect 
io.on('connection', socket => {
    console.log('New connection has been established')
    socket.on('disconnect', ()=> {
        console.log('User has left connection')
    });
});

app.use(router);

server.listen(PORT, ()=> {
    console.log(`Server listening on http://localhost:${PORT}`);
})