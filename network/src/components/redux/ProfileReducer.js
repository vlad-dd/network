import userAPI from "../../API/API";
const ADD_POST = "ADD_POST";
const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_JOB_STATUS = 'SET_JOB_STATUS'
const SET_STATUS = 'SET_STATUS';
const LOADING_STATUS = 'LOADING_STATUS';

let profileInitialState = {
  PostData: [
    { id: 1, message: "gachi", likesCount: 10, dislikesCount: 1 },
    { id: 2, message: "muchi", likesCount: 15, dislikesCount: 3 },
    { id: 3, message: "asstap", likesCount: 20, dislikesCount: 5 },
  ],
  setProfileData: {
    fullName: 'testName',
    aboutMe: 'Test',
    contacts: {
      facebook: 'test.com',
      website: 'test.com',
      twitter: 'test.com',
      instagram: 'test.com',
      youtube: 'test.com',
      github: 'test.com'
    },
    photos: {
      small: 'test.com',
      large: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-jokes3-1581711672.jpg'
    }
  }, 
  jobHunting: false,
  status: "",
  isFetching: false

};

 const profileReducer = (state = profileInitialState, action) => {
   let stateCopy;
  switch (action.type) {
    case ADD_POST: {
      stateCopy = {
        ...state,
        PostData: [...state.PostData, { id: 5, message: action.post,likesCount: 1, dislikesCount: 1,}],
      }

      return stateCopy;
    }

    case SET_PROFILE_DATA: {
      stateCopy = {
        ...state,
        setProfileData: action.profileData,
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

    case SET_STATUS: {
      stateCopy = {
        ...state,
        status: action.status,
      }
      return stateCopy;
    } 

    case LOADING_STATUS: {
      stateCopy = {
        ...state,
        isFetching: action.loadingStatus,
      }
      return stateCopy;
    } 
    default:
      return state;
  }
};



export let AddPostActionCreator = (newPost) => {
  return {
    type: ADD_POST,
    post: newPost
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

export let setStatusActionCreator = (newStatus) => {
  return {
    type: SET_STATUS,
    status: newStatus
  }
}

export let loadingStatusActionCreator = (newStatusValue) => {
  return {
    type: LOADING_STATUS,
    loadingStatus: newStatusValue
  }

}


export const getNewUsersThunkCreator = (userId) => {
  return (dispatch) => {
    userAPI.getUsers(userId).then((data) => {
      dispatch(setProfileDataActionCreator(data));
      dispatch(jobStatusActionCreator(data.lookingForAJob));
    })
  }
}

export const getUserStatusThunkCreator = (userId) => {
  return (dispatch) => {
    userAPI.getStatus(userId).then((response) => {
      dispatch(setStatusActionCreator(response.data));
    })
    }
}

export const updateStatusThunkCreator = (newStatus) => {
  return (dispatch) => {
    dispatch(loadingStatusActionCreator(true))
    userAPI.updateStatus(newStatus).then(() => {
      dispatch(setStatusActionCreator(newStatus))
      dispatch(loadingStatusActionCreator(false))
    })
  }
}




export default profileReducer;
