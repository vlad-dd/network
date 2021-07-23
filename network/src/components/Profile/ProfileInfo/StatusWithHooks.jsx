import React from "react";
import "../../../styles/Status.css";
import Preloader from "../../Common/Preloader";
import { useState, useEffect } from "react";

const StatusWithHooks  = (props) => {

    let [editMode, setEditMode] = useState(false)

    let [status, setEditStatus] = (useState(props.status))

    useEffect(() => {
        setEditStatus(props.status)
    }, [props.status])





    const activateMode = () => {
        setEditMode(true);
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status);
    }

   let onStatusChange = (el) => {
        setEditStatus(el.currentTarget.value)
    }
    
  


       return (
       <div>
        {!editMode ? <div><span onDoubleClick = {activateMode}>{props.status ? props.status: '...'}</span></div> : 
        <div><span><input onChange = {onStatusChange} onBlur = {deActivateMode} autoFocus={true} value = {status}/></span></div> }
           
        </div>)
    }

export default StatusWithHooks;
