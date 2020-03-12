import React from 'react';
import './Messages.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import UserText from '../UserText/UserText';
/**
* @author
* @function Messages;
**/

const Messages = (props) => {

  return(
    <ScrollToBottom>
      <div className="container">
        <div className="row">
       
          <div className="col-md-8">
            <div className="messages">
              {props.messages.map((msg,i)=> {
                  return(<div key={i}><Message user={msg.user} message={msg.text} name={props.name}/> </div>)
              })}
            </div>
          </div>
        
          <div className="col-md-3">
            <UserText />
          </div>
        </div>
      </div>
  </ScrollToBottom>
   )

 }

export default Messages;