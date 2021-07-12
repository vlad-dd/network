const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_JOB_STATUS = 'SET_JOB_STATUS'

let profileInitialState = {
  PostData: [
    { id: 1, message: "gachi", likesCount: 10, dislikesCount: 1 },
    { id: 2, message: "muchi", likesCount: 15, dislikesCount: 3 },
    { id: 3, message: "asstap", likesCount: 20, dislikesCount: 5 },
  ],

  newPostTxt: "",
  setProfileData: [],
  jobHunting: false

};

 const profileReducer = (state = profileInitialState, action) => {
   let stateCopy;
  switch (action.type) {
    case ADD_POST: {
      stateCopy = {
        ...state,
        newPostTxt: '',
        PostData: [...state.PostData, { id: 5, message: state.newPostTxt,likesCount: 1, dislikesCount: 1,}],
      }

      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      stateCopy = {
        ...state,
        newPostTxt: action.someText
      }
      return stateCopy;
    }

    case SET_PROFILE_DATA: {
      stateCopy = {
        ...state,
        setProfileData: [action.profileData],
      }
      return stateCopy;
    }

    case SET_JOB_STATUS: {
      stateCopy = {
        ...state,
        jobHunting: action.jobStatus,
      }
      return stateCopy;
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

export let setProfileDataActionCreator = (newData) => {
  return {
    type: SET_PROFILE_DATA,
    profileData: newData
  }
}

export let jobStatusActionCreator = (status) => {
  return {
    type: SET_JOB_STATUS,
    jobStatus: status
  }
}

export default profileReducer;
