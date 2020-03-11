import React, {useState} from 'react';
import './Join.css';
import {Link} from 'react-router-dom';
/**
* @author
* @function Join
**/

const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return(
    <div className="form-style-5">
      <h1>Join The Chatroom</h1> 
      <fieldset>

         <input onChange={(event)=>setName(event.target.value)}
          type="text" name="field1" placeholder="Your Name " />

         <input onChange={(event)=>setRoom(event.target.value)}
          type="text" name="field2" placeholder="Name of ChatRoom" />

      </fieldset>
      <Link to={`/chat?name=${name}&room=${room}`} >
        <input onClick={(event)=> (!name || !room) ? event.preventDefault() : null} type="submit" value="Join" />
      </Link>
      
    </div>
   )

 }

export default Join;