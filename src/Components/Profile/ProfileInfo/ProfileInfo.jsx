import React from "react";
import s from './ProfileInfo.module.css';
import Myposts from "../Myposts/Myposts";

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://2.bp.blogspot.com/-8dVORT5Be0Y/UsmZtkY6-SI/AAAAAAAAEh0/TlWfiQYboOA/s1600/supercar_jdm36.jpg'/>
        </div>
        <div className={s.DescriptionBlock}>
            ava +description
        </div>
    </div>
}
export default ProfileInfo;