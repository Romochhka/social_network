import React from "react";
import s from './Profile.module.css';
import Myposts from "./Myposts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <ProfileInfo/>
            <Myposts/>
        </div>
    </div>
        }
        export default Profile;