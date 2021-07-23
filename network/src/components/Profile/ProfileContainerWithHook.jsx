import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {jobStatusActionCreator} from '../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import {getNewUsersThunkCreator} from '../redux/ProfileReducer';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import { compose } from "redux";
import {getUserStatusThunkCreator} from '../redux/ProfileReducer';
import {updateStatusThunkCreator} from '../redux/ProfileReducer';
import { useEffect } from "react";



const ProfileContainerWithHook = (props) => {
    useEffect(() => {
        let userId = props.location.pathname
        userId = userId.match(/(\d+)/g)
        if(!userId) {
            userId = '18285';
            //this is test id, for correct work use {isAuth ? this.props.userId : <Redirect to={'/login'} />} 
        }
        props.getNewUsersThunkCreator(userId);
        props.getUserStatusThunkCreator(userId);

    })
    
    return ( 
      <div>
          <Profile {...props} ProfileData = {props.ProfileData}
          jobHunting = {props.jobHunting} status = {props.status}
          updateStatusThunkCreator = {props.updateStatusThunkCreator}
          isFetching = {props.isFetching} />
      </div>
    );
  }

let mapStateToProps = (state) => ({
    ProfileData: state.profilePage.setProfileData,
    jobHunting: state.profilePage.jobHunting,
    status: state.profilePage.status,
    isFetching: state.profilePage.isFetching,
    userId: state.profilePage.userId,
    isAuth: state.authPart.isAuth
});




export default compose(connect(mapStateToProps, {setJobStatus: jobStatusActionCreator, getNewUsersThunkCreator: getNewUsersThunkCreator,
  getUserStatusThunkCreator: getUserStatusThunkCreator, updateStatusThunkCreator: updateStatusThunkCreator}),
 withAuthRedirect, withRouter)(ProfileContainerWithHook);