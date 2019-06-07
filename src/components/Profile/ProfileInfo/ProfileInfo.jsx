import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if(!props.profile){
        return  <Preloader/>
    }

    return (
        <div>

            <div>
                <img className={s.img}
                     src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>

            <div className={"s.descriptionBlock"}>
                <img src ={props.profile.photos.large}/>
                <div > {props.profile.aboutMe} </div>
                <div > {props.profile.fullName} </div>
                ava+descr
            </div>

        </div>
    )


}

export default ProfileInfo;