import "../../styles/Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import React from "react";
import Login from "../Login/Login";
import { Redirect } from "react-router";


const Dialogs = (props) => {
  
  let DialogsElements = props.DialogsData.map((el) => {
    return (<Dialog className='dialog' id={el.id} name={el.name} img={el.img} key={el.id}/>);
  })
  
  let MessageElements = props.MessageData.map((messageEl) => {
    return(<Message text={messageEl.text} key={messageEl.id}/>)
  });

  let newDialogOne = React.createRef();


  let addDialog = () => {
    props.addNewDialog();
  }

  let ChangeDialogFunc = () => {
    let dialog = newDialogOne.current.value;
    props.UpdateDialog(dialog);
  }
  


  return (
    <div className="dialogs">
      <div className="dialogs_items">
        {DialogsElements }
      </div>
      <div className="messages">
        {MessageElements}
        <textarea onChange= {ChangeDialogFunc} value={props.newDialogText} ref={newDialogOne}></textarea>
       <div><button onClick = {addDialog}>Add message</button></div>
      </div>
    </div>
  );
};

export default Dialogs;
