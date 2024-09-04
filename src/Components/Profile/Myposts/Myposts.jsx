import React from "react";
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (Props) => {

    let Posts = [
        {id:1,message:'Hi,How are you', Counts: 12},
        {id:2,message:"it's my first post", Counts: 23},
        {id:3, message:"Hello everyone", Counts: 114},
        ]
     let PostsElements = Posts
         .map(Posts => <Post message={Posts.message} Counts={Posts.Counts}/> );
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                { PostsElements }
                <Post message="Are u kidding me?" Counts="54"/>

            </div>
        </div>
    </div>
}
export default Myposts;