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
  const users = [...props.users];
  const userNames = [];
  users.forEach(usr=> {
    userNames.push(usr.name);
  })
  return(
    <ScrollToBottom>
      <div className="container">
        <button onClick={()=> console.log(userNames)}>Go</button>
        <div className="row">
       
          <div className="col-md-8">
            <div className="messages">
              {props.messages.map((msg,i)=> {
                  return(<div key={i}><Message user={msg.user} message={msg.text} name={props.name}/> </div>)
              })}
            </div>
          </div>
        
          <div className="col-md-3">
            <UserText users = {userNames} />

          </div>
        </div>
      </div>
  </ScrollToBottom>
   )

 }

export default Messages;