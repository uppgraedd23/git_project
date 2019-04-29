import React from 'react';
import styles from './users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/userPhoto.png'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger;
            props.setUsers(response.data.items);
        })

    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
    </div>
    <div>
        {u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button>
            : <button onClick={() => {
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

// props.setUsers([
//     {
//         id: 1,
//         photoUrl: 'https://i1.wp.com/theblast.com/wp-content/uploads/2019/03/0319_Travis-Scott.jpg?fit=1024%2C576&ssl=1',
//         followed: true,
//         fullName: 'Victor',
//         status: 'Baby Im Boss',
//         location: {city: 'Kiev', country: 'Ukraine'}
//     },
//     {
//         id: 2,
//         photoUrl: 'https://i1.wp.com/theblast.com/wp-content/uploads/2019/03/0319_Travis-Scott.jpg?fit=1024%2C576&ssl=1',
//
//         followed: false,
//         fullName: 'Vector',
//         status: 'Baby Im Boss more',
//         location: {city: 'Moscow', country: 'Russian'}
//     },
//     {
//         id: 3,
//         photoUrl: 'https://i1.wp.com/theblast.com/wp-content/uploads/2019/03/0319_Travis-Scott.jpg?fit=1024%2C576&ssl=1',
//
//         followed: true,
//         fullName: 'Hit Method',
//         status: 'Baby Im Boss very more',
//         location: {city: 'New York', country: 'USA'}
//     },
// ])