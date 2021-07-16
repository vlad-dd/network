import userAPI from "../../API/API";
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
        isAuth: true
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export let setDataActionCreator = (userId, userEmail, userLogin) => {
  return {
    type: SET_USER_DATA,
    data: {
      id: userId,
      email: userEmail,
      login: userLogin,
    },
  };
};

export const setDataThunkCreator = () => {
  return (dispatch) => {
    userAPI.getAuthMe().then((data) => {
      let { id, email, login } = data.data
      dispatch(setDataActionCreator(id, email, login));
    })
  }
}

export default AuthReducer;
