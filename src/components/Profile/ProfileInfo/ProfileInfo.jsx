import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile){
        return  <Preloader/>
    }

    return (
        <div>
            <div className={"s.descriptionBlock"}>
                <img src ={profile.photos.large}/>
                <div > About Me:{profile.aboutMe} </div>
                <div > Name: {profile.fullName} </div>
                Status:
                <ProfileStatus status={status} updateStatus = {updateStatus}/>
            </div>

        </div>
    )


}

export default ProfileInfo;