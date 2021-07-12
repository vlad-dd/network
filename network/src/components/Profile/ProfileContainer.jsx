import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {setProfileDataActionCreator} from '../redux/ProfileReducer';
import {jobStatusActionCreator} from '../redux/ProfileReducer';
import {withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
      // let userId = this.props.match.params.userId
        axios.get
        ( `https://social-network.samuraijs.com/api/1.0/profile/`)
        .then((response) => {
            this.props.setProfileData(response.data);
            this.props.setJobStatus(response.data.lookingForAJob)
        });
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
    jobHunting: state.profilePage.jobHunting
});

let urlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfileData: setProfileDataActionCreator,
setJobStatus: jobStatusActionCreator})(ProfileContainer);
