import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsPRed';
import sidebarReducer from './SidebarRed';
import UserReducer from './UserReducer';
import AuthReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';



let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebarPage: sidebarReducer,
    usersPage: UserReducer,
    authPart: AuthReducer

});


let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;