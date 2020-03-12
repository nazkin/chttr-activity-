import React from 'react'
import './Message.css';
import ReactEmoji from 'react-emoji';
/**
* @author
* @function Message
**/

const Message = (props) => {
    let isCurrentUser = false;
    const trimmedName = props.name.trim().toLowerCase();

    if(props.user === trimmedName){
        isCurrentUser = true;
    }
    
  return(
    isCurrentUser ? (
        <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{props.name}</p>
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{ReactEmoji.emojify(props.message)}</p>
            </div>
        </div>
    ) : (
        <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{props.user}</p>
            </div>
            <p className="sentText pl-10">{ReactEmoji.emojify(props.message)}</p>
        </div>
    )

   )

 }

export default Message;
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
