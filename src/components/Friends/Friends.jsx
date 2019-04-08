import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendsElements = props.friends.map(f => <Friend name={f.name} id={f.id}/>)

    return (

        <div className={s.friends}>
            {friendsElements}
        </div>

    )
};

export default Friends;