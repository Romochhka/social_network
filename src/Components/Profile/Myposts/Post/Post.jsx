import React from "react";
import s from './Post.module.css';

const Post = (props) => {

return <div className={s.item}>
        <img src='https://i.pinimg.com/564x/c7/7a/5f/c77a5f80b1d66d75944d99f10aeab9f0.jpg'/>
    {props.message}
        <div>
            <span>Likes</span> {props.Counts}
        </div>
    </div>
}
export default Post;