import '../../styles/Sidebar.css';
import Friend from './Friend/Friend';
import store from '../redux/state';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  let FriendElements = store._state.sidebarPage.FriendsData.map((el) => {
   return (<Friend firstname={el.name} lastname={el.lastname} src={el.imgSrc} key={el.id}/>)});

  return (
  <div>
    <nav className="nav">
        <div className="item">
          <NavLink to="/profile/:userId" activeClassName='active'>Profile</NavLink>
        </div>
        <div className="item">
          <NavLink to="/dialogs">Dialogs</NavLink>
        </div>
        <div className="item">
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="item">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="item">
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className="item">
          <NavLink to="/users">Users</NavLink>
        </div>
      </nav>

      <div className="friends">
        <h2>Friends</h2>
        {FriendElements}

      </div>
  </div>
  )};

export default Sidebar;
