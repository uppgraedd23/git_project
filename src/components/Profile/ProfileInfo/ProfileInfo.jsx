import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>

            <div>
                <img className={s.img}
                     src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>

            <div className={"s.descriptionBlock"}>
                ava+descr
            </div>

        </div>
    )


}

export default ProfileInfo;