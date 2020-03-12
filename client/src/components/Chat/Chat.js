import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import InfoHeader from '../InfoHeader/InfoHeader';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
/**
* @author
* @function Chat
**/
  let socket;
const Chat = ({location}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState('');
  
  const ENDPOINT = 'localhost:8080';
  

  useEffect(()=> {
    const {name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    //here the socket will emit a join function signalling that a new user wants to join
    socket.emit('join',{name, room}, (error)=> {
      if(error){
        alert(error);
      }
    });
    

  }, [ENDPOINT, location.search]);

  useEffect(()=> {
    socket.on('message', (message)=> {
      setMessages([...messages, message])
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });

    //Here we will handle the unmounting condition by disconnecting the socket 
    return () => {
      socket.emit('disconnect');

      socket.off();
    }
  }, [messages])


//SendMessage function that will be responsible for deploying messages to the chat
const sendMessage = (e)=> {
  e.preventDefault();
  
  if(message){
    socket.emit('sendMessage', message, ()=> {
      //This is our cleanup that happens once the message is sent (clears the input field)
      return setMessage('');
    });
  }
}
console.log(message, messages);
  return( 
    <div className="container">
        <div className="outerContainer">
        <h1>Welcome to the Chatroom!!</h1>
           <div className="innerContainer">
              <InfoHeader roomName={room}/>
              <Messages users={users} name={name} messages={messages}/>
              <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
           </div>
        </div>
    </div>

 
   )

 }

export default Chat;