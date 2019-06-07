import React from 'react';
import styles from "./users.module.css"
import userPhoto from '../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
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
                    props.toggleFollowingInProgress(true, u.id);

                    usersAPI.userUnfollow(u.id)
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.unfollow(u.id);
                            }
                            props.toggleFollowingInProgress(false, u.id);

                        });


                }}>Unfollow</button>
            : <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                onClick={() => {
                    props.toggleFollowingInProgress(true, u.id);

                    usersAPI.userFollow(u.id)
                        .then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id);
                            }
                            props.toggleFollowingInProgress(false, u.id);

                        });


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