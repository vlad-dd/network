const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let profileInitialState = {
  PostData: [
    { id: 1, message: "gachi", likesCount: 10, dislikesCount: 1 },
    { id: 2, message: "muchi", likesCount: 15, dislikesCount: 3 },
    { id: 3, message: "asstap", likesCount: 20, dislikesCount: 5 },
  ],

  newPostTxt: "",
};

 const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostTxt,
        likesCount: 1,
        dislikesCount: 1,
      };
      state.PostData.push(newPost);
      state.newPostTxt = " ";
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostTxt = action.someText;
      return state;
    }
    default:
      return state;
  }
};

export let AddPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let UpdatePostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    someText: text,
  };
};

export default profileReducer;
