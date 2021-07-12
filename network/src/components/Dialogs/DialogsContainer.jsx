import "../../styles/Dialogs.css";
import { AddDialogActionCreator } from "../redux/DialogsPRed";
import { UpdateDialogActionCreator } from "../redux/DialogsPRed";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    DialogsData: state.dialogsPage.DialogsData,
    MessageData: state.dialogsPage.MessageData,
    newDialogText: state.dialogsPage.newDialogText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewDialog: () => {
      dispatch(AddDialogActionCreator());
    },
    UpdateDialog: (dialog) => {
      dispatch(UpdateDialogActionCreator(dialog));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
