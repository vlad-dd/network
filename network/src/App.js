import "./styles/App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music'
// import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeThunkCreator } from "./components/redux/app-reducer";
import Preloader from "./components/Common/Preloader";
import ProfileContainerWithHook from "./components/Profile/ProfileContainerWithHook";
import  UsersContainerWithHook  from "./components/Users/UsersContainerWithHook";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


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
    <Route path='/profile' render={ () => <ProfileContainerWithHook  />} />
    <Route path='/dialogs' render={() => {
     return <React.Suspense fallback={<div>Loading......</div>}><DialogsContainer/></React.Suspense>}} />
    <Route path='/news' render={() => <News />} />
    <Route path="/music" render={() => <Music />} />
    <Route path="/settings" render={() => <Settings />}/>
    <Route path="/users" render={() => <UsersContainerWithHook />}/>
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
