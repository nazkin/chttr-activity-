import React from 'react';
import './Input.css';
/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <div className="container">
            <form className="form">
            <input className="input" type="text" placeholder="type here..."
                  value={props.message}
                  onChange={(event)=> props.setMessage(event.target.value)} 
                  onKeyPress={event=> event.key === 'Enter'? props.sendMessage(event) : null}/>
            <button className="sendButton" onClick={event=> props.sendMessage(event)}>Send</button>
            </form>

    </div>
   )

 }

export default Input;