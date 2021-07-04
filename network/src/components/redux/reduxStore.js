import {combineReducers, createStore} from 'redux';
import profileReducer from './ProfileReducer';
import dialogsReducer from './DialogsPRed';
import sidebarReducer from './SidebarRed';


let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sidebarPage: sidebarReducer
});


let store = createStore(reducers);

export default store;