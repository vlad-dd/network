const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGE = "SET_PAGE";
const SET_TOTAL = "SET_TOTAL";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
};

const UserReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case FOLLOW: {
      stateCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
      return stateCopy;
    }
    case UNFOLLOW: {
      stateCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
      return stateCopy;
    }

    case SET_USERS: {
      stateCopy = {
        ...state,
        users: [...action.users],
      };
      return stateCopy;
    }

    case SET_PAGE: {
      stateCopy = {
        ...state,
        currentPage: action.currentPage,
      };
      return stateCopy;
    }

    case SET_TOTAL: {
      stateCopy = {
        ...state,
        totalUsersCount: action.totalCount,
      };
      return stateCopy;
    }
    case TOGGLE_IS_FETCHING:
      {
        stateCopy = {
          ...state,
          isFetching: action.isFetching
        };
        return stateCopy;
      }

    default:
      return state;
  }
};

export let FollowActionCreator = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export let UnFollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export let setUserActionCreator = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export let setCurrentPageActionCreator = (pg) => {
  return {
    type: SET_PAGE,
    currentPage: pg,
  };
};

export let setTotalActionCreator = (count) => {
  return {
    type: SET_TOTAL,
    totalCount: count,
  };
};

export let ToggleActionCreator = (toogle) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: toogle
  };
};

export default UserReducer;
