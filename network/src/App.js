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


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="app-wrapper-content">
      <Route path='/profile' render={ () => <ProfileContainer  />} />
      <Route path='/dialogs' render={() => <DialogsContainer/>} />
      <Route path='/news' render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />}/>
      <Route path="/users" render={() => <UsersContainer />}/>
      </div>
    </div>

  );
};

export default App;
