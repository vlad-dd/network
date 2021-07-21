import { setDataThunkCreator } from '../redux/auth-reducer';
let SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case SET_INITIALIZED: {
            stateCopy = {
              ...state,
              initialized : true
            };
            return stateCopy;
          }
          
          default: 
          return state;

    }
}

export const initializeActionCreator = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initializeThunkCreator = () => {
    return (dispatch) => {
       let promise = dispatch(setDataThunkCreator());
       Promise.all([promise]).then(() => {
        dispatch(initializeActionCreator());
       })
        
    }
}


export default appReducer;