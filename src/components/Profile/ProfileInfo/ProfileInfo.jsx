import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/userPhoto.png";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }


    return (
        <div>
            <div className={"s.descriptionBlock"}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoChange}/>}
                <div> About Me:{profile.aboutMe} </div>
                <div> Name: {profile.fullName} </div>
                Status:
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )


}

export default ProfileInfo;