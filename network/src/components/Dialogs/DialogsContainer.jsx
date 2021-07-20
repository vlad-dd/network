import "../../styles/Dialogs.css";
import { AddDialogActionCreator } from "../redux/DialogsPRed";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import { compose } from "redux";


let authRedirectDialog = withAuthRedirect(Dialogs)

let mapStateToProps = (state) => {
  return {
    DialogsData: state.dialogsPage.DialogsData,
    MessageData: state.dialogsPage.MessageData,
    newDialogText: state.dialogsPage.newDialogText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewDialog: (newMessage) => {
      dispatch(AddDialogActionCreator(newMessage));
    },
  };
};




// const authRedirectDialogs = (props) => {
//   if (props.auth) {
//     return <Redirect to = '/login'/>
//   }
//   return <Dialogs {...props}/>
// }




export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);
