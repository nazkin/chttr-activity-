import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';

/**
* @author
* @function Chat
**/
  let socket;
const Chat = ({location}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  
  const ENDPOINT = 'localhost:8080';
  

  useEffect(()=> {
    const {name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    console.log(socket);
  }, [ENDPOINT, location.search])
  return(
    <div>
        <h1>Welcome to the Chatroom!!</h1>
    </div>
   )

 }

export default Chat;