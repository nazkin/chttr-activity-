import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import InfoHeader from '../InfoHeader/InfoHeader';
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
  
  const ENDPOINT = 'localhost:8080';
  

  useEffect(()=> {
    const {name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    //here the socket will emit a join function signalling that a new user wants to join
    socket.emit('join',{name, room}, ()=> {
 
    });
    
    //Here we will handle the unmounting condition by disconnecting the socket 
    socket.emit('disconnect');
    socket.off();
  }, [ENDPOINT, location.search]);

  useEffect(()=> {
    socket.on('message', (message)=> {
      setMessages([...messages, message])
    })
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
    <div>
        <h1>Welcome to the Chatroom!!</h1>
        <div className="outerContainer">
           <div className="innerContainer">
              <InfoHeader roomName={room}/>
           </div>
           <input value={message}
                  onChange={(event)=> setMessage(event.target.value)} 
                  onKeyPress={event=> event.key === 'Enter'? sendMessage(event) : null}/>
        </div>
    </div>
   )

 }

export default Chat;