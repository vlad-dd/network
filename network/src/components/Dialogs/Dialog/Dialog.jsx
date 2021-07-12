import '../../../styles/Dialog.css';
import { NavLink } from "react-router-dom";
const Dialog = (props) => {
    return(
      <div>
         <div className={props.className}>
           <NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
           <img src={props.img} className="user_img" alt='user_img'/></div>
      </div>
    )
  }

  export default Dialog;