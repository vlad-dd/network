import React from "react";
import "../../../styles/Status.css";
import Preloader from "../../Common/Preloader";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode () {
        this.setState( {
            editMode: true
        } );
        // this.forceUpdate();
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunkCreator(this.state.status);
    }

    onStatusChange = (el) => {
        this.setState( {
            status: el.currentTarget.value
        } )
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status != this.props.status) {
            this.setState ({
                status: this.props.status
            })
        }
    }

    render() {
       return (
       <div>
           {this.props.isFetching ? <Preloader /> : ' '}
        {!this.state.editMode ? <div><span onDoubleClick = {this.activateEditMode.bind(this)}>{this.props.status ? this.props.status: '...'}</span></div> : 
        <div><span><input onChange = {this.onStatusChange} autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} value = {this.props.status}/></span></div> }
           
        </div>)
    }
}

export default Status;
