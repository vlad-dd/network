import {combineReducers, createStore} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsPRed';
import sidebarReducer from './SidebarRed';
import UserReducer from './UserReducer';



let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebarPage: sidebarReducer,
    usersPage: UserReducer

});


let store = createStore(reducers);

window.store = store;

export default store;