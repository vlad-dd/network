import "../../../styles/MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import {AddPostActionCreator} from '../../redux/ProfileReducer'
import {UpdatePostActionCreator} from '../../redux/ProfileReducer';
import MyPosts from "./MyPostsContainer";




const MyPosts = (props) => {


  let addPost = () => {
    props.dispatch(AddPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdatePostActionCreator(text));
  }


  return (
    <div>
        <MyPosts addPost = {addPost} onPostChange = {onPostChange}/>

    </div>
  );
};

export default MyPosts;