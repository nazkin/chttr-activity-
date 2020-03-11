import React from 'react'

/**
* @author
* @function InfoHeader
**/

const InfoHeader = (props) => {
  return(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src="onlineIcon.png" alt="online image"/>
            <h3>{props.roomName}</h3>
        </div>
        <div className="rightInnerContainer" >
            <a href="/"><img src="closeIcon.png" alt="sign-out image"/></a>
        </div>
    </div>
   )

 }

export default InfoHeader