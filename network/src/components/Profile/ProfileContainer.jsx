import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {jobStatusActionCreator} from '../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';
import {getNewUsersThunkCreator} from '../redux/ProfileReducer';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import { compose } from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
      let userId = this.props.location.pathname
      if(!userId) {
        userId = '/profile';
      }
      this.props.getNewUsersThunkCreator(userId);
    }

  render() {
    
    return ( 
      <div>
          <Profile {...this.props} ProfileData = {this.props.ProfileData}
          jobHunting = {this.props.jobHunting}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    ProfileData: state.profilePage.setProfileData,
    jobHunting: state.profilePage.jobHunting,
});




export default compose(connect(mapStateToProps, {setJobStatus: jobStatusActionCreator, getNewUsersThunkCreator: getNewUsersThunkCreator}),
 withAuthRedirect, withRouter)(ProfileContainer);