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
        {names.map(name=> {
            return(
                <p>{name}</p>
            )
        })}
    </div>
   )

 }

export default UserText;