import "../../../styles/MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import {AddPostActionCreator} from '../../redux/ProfileReducer'
import {UpdatePostActionCreator} from '../../redux/ProfileReducer';




const MyPosts = (props) => {
  let PostDataElements = props.PostData.map((PostDataEl) => {
    return(<Post message={PostDataEl.message} likes={PostDataEl.likesCount} dislikes={PostDataEl.dislikesCount} />)
  });

  let newPostElement =  React.createRef();


  let addPost = () => {
    props.dispatch(AddPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdatePostActionCreator(text));
  }


  return (
    <div className="postsBlock">
      <div><h2>My posts</h2><div>
        <div>
          <textarea onChange = {onPostChange} ref={newPostElement} value= {props.addNewTxt}/>
          </div>
          <div><button onClick={addPost}>Add post</button></div>
      </div>
      </div>
      <div className="posts">
        {PostDataElements}
          
      </div>
    </div>
  );
};

export default MyPosts;