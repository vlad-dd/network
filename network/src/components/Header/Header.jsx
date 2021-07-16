import "../../styles/Header.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
  return (
    <header className="header">
       {props.isAuth ?  props.login : <span><NavLink to="/login">Login</NavLink></span>}
      <h2>Network</h2>
    </header>
  );
};

export default Header;
