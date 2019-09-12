import React from 'react';
import styles from "./users.module.css"
import userPhoto from '../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <div key={u.id}>
<span>
    <div>
        <NavLink to={'/profile/' + u.id}>
        <img src={u.photos.small != null ? u.photos.small : userPhoto}
             className={styles.userPhoto}/>
        </NavLink>

    </div>
    <div>
        {u.followed
            ? <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                    props.unfollow(u.id)
                }}>Unfollow</button>
            :
            <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                    props.follow(u.id)
                }}>follow</button>}

    </div>
</span>

                <span>
    <div>{u.name}</div>
    <div> {u.status}</div></span>
                <span>
    <div>{"u.location.city"}</div>
    <div>{"u.location.country"}</div></span>

            </div>)
        }
    </div>
}


export default Users;