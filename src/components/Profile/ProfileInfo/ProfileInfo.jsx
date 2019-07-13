import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if(!props.profile){
        return  <Preloader/>
    }

    return (
        <div>

            {/*<div>*/}
                {/*<img c lassName={s.img}*/}
                     {/*src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>*/}
            {/*</div>*/}

            <div className={"s.descriptionBlock"}>
                <img src ={props.profile.photos.large}/>
                <div > About Me:{props.profile.aboutMe} </div>
                <div > Name: {props.profile.fullName} </div>
                Status:
                <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            </div>

        </div>
    )


}

export default ProfileInfo;