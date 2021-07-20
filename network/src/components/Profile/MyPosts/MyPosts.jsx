import "../../../styles/MyPosts.css";
import Post from "./Post/Post";
import React from "react";
import MainPostFormComponent from "./TextAreaForm";

const MyPosts = (props) => {
  let PostDataElements = props.PostData.map((PostDataEl) => {
    return(<Post message={PostDataEl.message} likes={PostDataEl.likesCount} dislikes={PostDataEl.dislikesCount} 
      key={PostDataEl.id}/>)
  });

  return (
    <div className="postsBlock">
      <div><h2>My posts</h2><div>
        <MainPostFormComponent addPost = {props.addPost}/>
        {/* <div>
          <textarea onChange = {updatePost} ref={newPostElement} value= {props.txt}/>
          </div>
          <div><button onClick={addNewPost}>Add post</button>
          </div> */}
      </div>
      </div>
      <div className="posts">
        {PostDataElements}
          
      </div>
    </div>
  );
};

export default MyPosts;