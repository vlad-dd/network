import "../../styles/Dialogs.css";
import React from "react";
import {AddDialogActionCreator} from '../redux/DialogsPRed';
import {UpdateDialogActionCreator} from '../redux/DialogsPRed';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addDialog = () => {
    props.dispatch(AddDialogActionCreator());
  }

  let ChangeDialogFunc = (dialog) => {
    props.dispatch(UpdateDialogActionCreator(dialog));
  }

  return (<Dialogs addNewDialog = {addDialog} UpdateDialog = {ChangeDialogFunc} 
    DialogsData = {state.DialogsData} MessageData = {state.MessageData} 
    newDialogText = {state.newDialogText}/>);
};

export default DialogsContainer;
