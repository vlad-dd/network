import "./styles/App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from "./components/Users/UsersContainer";
import { Route } from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeThunkCreator } from "./components/redux/app-reducer";
import Preloader from "./components/Common/Preloader";


class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {
    if(this.props.initialized) {
      return <div className="app-wrapper">
    <HeaderContainer />
    <Sidebar />
    <div className="app-wrapper-content">
    <Route path='/profile' render={ () => <ProfileContainer  />} />
    <Route path='/dialogs' render={() => <DialogsContainer/>} />
    <Route path='/news' render={() => <News />} />
    <Route path="/music" render={() => <Music />} />
    <Route path="/settings" render={() => <Settings />}/>
    <Route path="/users" render={() => <UsersContainer />}/>
    <Route path="/login" render={() => <Login />}/>
    </div>
  </div>
    } else {
      return <Preloader />
    }
    
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized

})

export default compose(connect(mapStateToProps, { initializeThunkCreator:initializeThunkCreator })(App));
