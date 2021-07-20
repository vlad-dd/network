import { connect } from "react-redux";
import "../../../styles/MyPosts.css";
import { AddPostActionCreator } from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
  return {
    PostData: state.profilePage.PostData,
    txt: state.profilePage.newPostTxt
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {dispatch(AddPostActionCreator(post))},
  }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
