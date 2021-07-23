//This component will not use anymore.



// import React from "react";
// import Profile from "./Profile";
// import { connect } from "react-redux";
// import {jobStatusActionCreator} from '../redux/ProfileReducer';
// import {withRouter} from 'react-router-dom';
// import {getNewUsersThunkCreator} from '../redux/ProfileReducer';
// import {withAuthRedirect} from '../../hok/withAuthRedirect';
// import { compose } from "redux";
// import {getUserStatusThunkCreator} from '../redux/ProfileReducer';
// import {updateStatusThunkCreator} from '../redux/ProfileReducer';



// class ProfileContainer extends React.Component {
//     componentDidMount() {
//       let userId = this.props.location.pathname;
//       userId = userId.match(/(\d+)/g)
//       if(!userId) {
//         userId = '18285';
//         //this is test id, for correct work use {isAuth ? this.props.userId : <Redirect to={'/login'} />} 
//         if(!userId) {
//           this.props.history.push('/Login');
//         }
//       }
//       this.props.getNewUsersThunkCreator(userId);
//       this.props.getUserStatusThunkCreator(userId);
//     }

//   render() {
    
//     return ( 
//       <div>
//           <Profile {...this.props} ProfileData = {this.props.ProfileData}
//           jobHunting = {this.props.jobHunting} status = {this.props.status}
//           updateStatusThunkCreator = {this.props.updateStatusThunkCreator}
//           isFetching = {this.props.isFetching} />
//       </div>
//     );
//   }
// }

// let mapStateToProps = (state) => ({
//     ProfileData: state.profilePage.setProfileData,
//     jobHunting: state.profilePage.jobHunting,
//     status: state.profilePage.status,
//     isFetching: state.profilePage.isFetching,
//     userId: state.profilePage.userId,
//     isAuth: state.authPart.isAuth
// });




// export default compose(connect(mapStateToProps, {setJobStatus: jobStatusActionCreator, getNewUsersThunkCreator: getNewUsersThunkCreator,
//   getUserStatusThunkCreator: getUserStatusThunkCreator, updateStatusThunkCreator: updateStatusThunkCreator}),
//  withAuthRedirect, withRouter)(ProfileContainer);