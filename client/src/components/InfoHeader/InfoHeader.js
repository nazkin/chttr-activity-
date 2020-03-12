import React from 'react';
import './InfoHeader.css';
/**
* @author
* @function InfoHeader
**/

const InfoHeader = (props) => {
  return(
    <div className="container">
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src="onlineIcon.png" alt="online image"/>
            <h3>{props.roomName}</h3>
        </div>
        <div className="rightInnerContainer" >
            <a href="/"><img src="closeIcon.png" alt="sign-out image"/></a>
        </div>
    </div>
    </div>

   )

 }

export default InfoHeader