import "./styles/App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from './components/Music/Music'
import { Route } from "react-router-dom";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
      <Route path='/profile' render={ () => <Profile postState={props.state.profilePage} dispatch = {props.dispatch} />} />
      <Route path='/dialogs' render={() => <Dialogs dialogsState={props.state.dialogsPage} dispatch = {props.dispatch}/>} />
      <Route path='/news' render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />}/>
      </div>
    </div>

  );
};

export default App;
