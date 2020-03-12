import React from 'react';
import './UserText.css';

/**
* @author
* @function UserText
**/

const UserText = (props) => {
    const names = [...props.users];

  return(
    <div className="users">
        <ul class="userList">
            {names.map(name=> {
                return(
                    <li key={name}>
                        <div className="user">
                            {name}<img className="onlineImg" src="onlineIcon.png" />
                        </div> 
                    </li>          
                )
            })}

        </ul>

    </div>
   )

 }

export default UserText;