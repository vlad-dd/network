import "../../styles/Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import {AddDialogActionCreator} from '../redux/DialogsPRed';
import {UpdateDialogActionCreator} from '../redux/DialogsPRed';

const Dialogs = (props) => {
  let DialogsElements = props.dialogsState.DialogsData.map((el) => {
    return (<Dialog className='dialog' id={el.id} name={el.name} img={el.img} />);
  })
  
  let MessageElements = props.dialogsState.MessageData.map((messageEl) => {
    return(<Message text={messageEl.text} />)
  });

  let newDialogOne = React.createRef();


  let addDialog = () => {
    props.dispatch(AddDialogActionCreator());
  }

  let ChangeDialogFunc = () => {
    let dialog = newDialogOne.current.value;
    props.dispatch(UpdateDialogActionCreator(dialog));
  }

  return (
    <div className="dialogs">
      <div className="dialogs_items">
        {DialogsElements }
      </div>
      <div className="messages">
        {MessageElements}
        <textarea onChange= {ChangeDialogFunc} value={props.dialogsState.newDialogText} ref={newDialogOne}></textarea>
       <div><button onClick = {addDialog}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
