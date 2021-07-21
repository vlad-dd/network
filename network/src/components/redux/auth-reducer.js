import userAPI from "../../API/API";
import {stopSubmit} from 'redux-form';
let SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
  // isFetching: false
};

const AuthReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case SET_USER_DATA: {
      stateCopy = {
        ...state,
        ...action.data,
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export let setDataActionCreator = (userId, userEmail, userLogin, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      id: userId,
      email: userEmail,
      login: userLogin,
      isAuth: isAuth
    },
  };
};

export const setDataThunkCreator = () => {
  return (dispatch) => {
    userAPI.getAuthMe().then((data) => {
      let { id, email, login } = data.data
      dispatch(setDataActionCreator(id, email, login, true));
    })
  }
}

export const loginDataThunkCreator = (email, password, rememberMe) => {
  return (dispatch) => {
    userAPI.login(email, password, rememberMe).then((response) => {
      if(response.data.resultCode === 0) {
        dispatch(setDataThunkCreator())
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Error'
        let action = stopSubmit("login", {_error: message});
        dispatch(action)
      }
    })
   }
}


export const logoutThunkCreator = () => {
 return (dispatch) => {
    userAPI.logout().then(() => {
      dispatch(setDataActionCreator(null, null, null, false))
    })
  }
}

export default AuthReducer;
 