import { connect } from "react-redux";
import "../../../styles/MyPosts.css";
import { AddPostActionCreator } from "../../redux/ProfileReducer";
import { UpdatePostActionCreator } from "../../redux/ProfileReducer";
import MyPosts from "./MyPosts";



let mapStateToProps = (state) => {
  return {
    PostData: state.profilePage.PostData,
    txt: state.profilePage.newPostTxt
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {dispatch(AddPostActionCreator())},
    onPostChange: (text) => {dispatch(UpdatePostActionCreator(text))}
  }

}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
