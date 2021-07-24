import profileReducer from "../ProfileReducer";
import { AddPostActionCreator } from '../ProfileReducer'

let profileInitialState = {
    PostData: [
      { id: 1, message: "gachi", likesCount: 10, dislikesCount: 1 },
      { id: 2, message: "muchi", likesCount: 15, dislikesCount: 3 },
      { id: 3, message: "asstap", likesCount: 20, dislikesCount: 5 },
    ]
  };

 let DeletePost = (postId) => {
    return {
      type: 'DELETE_POST',
      post: postId
    };
  };

test('adding post to the page', () => {
let action = AddPostActionCreator('text')
      let newState = profileReducer(profileInitialState, action)
      expect(newState.PostData.length).toBe(4);
      expect(newState.PostData[3].message).toBe('text');
});




