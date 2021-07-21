import React from 'react';
import "../../styles/Header.css";
import { NavLink } from "react-router-dom";



const Header = (props) => {
  return (
    <header className="header">
       {props.isAuth ?  <div>
         {props.login} - <button onClick = {props.logoutThunkCreator}>Log Out</button>
         </div>  : <span><NavLink to="/login">Login</NavLink></span>}
    </header>
  );
};

export default Header;
