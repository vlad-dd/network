import "../../../styles/MyPosts.css";
import React from "react";
import { AddPostActionCreator } from "../../redux/ProfileReducer";
import { UpdatePostActionCreator } from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(AddPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(UpdatePostActionCreator(text));
  };

  return (
      <MyPosts
        PostData={state.PostData}
        addPost={addPost}
        onPostChange={onPostChange}
        txt={state.newPostTxt}
      />)
};

export default MyPostsContainer;
