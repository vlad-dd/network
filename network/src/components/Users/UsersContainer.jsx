//this component will not use anymore.

// import { connect } from "react-redux";
// import MainUsersComponent from './MainUsersComponent';
// import React from "react";
// import "../../styles/Users.css";
// import Preloader from "../Common/Preloader";
// import {followingInProgressActionCreator} from '../redux/UserReducer';
// import {getUsersThunkCreator} from '../redux/UserReducer';
// import {getPageThunkCreator} from '../redux/UserReducer';
// import {UnFollowThunkCreator} from '../redux/UserReducer';
// import {followThunkActionCreator} from '../redux/UserReducer';
// import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../redux/UserSelector";

// class UserC extends React.Component {
//   componentDidMount() {
//     this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
//   }
//   getPage = (pg) => {
//     this.props.getPageThunkCreator(pg, this.props.pageSize);
//   };

//   render() {
//     return (<> 
//     {this.props.isFetching ? <Preloader/> : null}
//       <MainUsersComponent totalUsersCount = {this.props.totalUsersCount} 
//       pageSize = {this.props.pageSize} currentPage = {this.props.currentPage}
//       getPage = {this.getPage} users = {this.props.users}
//       followingInProgress = {this.props.followingInProgress}
//       UnFollowThunkCreator = {this.props.UnFollowThunkCreator} followThunkActionCreator = {this.props.followThunkActionCreator}/> </>);}
// }


// let mapStateToProps = (state) => {
//   return {
//       users: getUsers(state),
//       pageSize: getPageSize(state),
//       totalUsersCount: getTotalUsersCount(state),
//       currentPage: getCurrentPage(state),
//       isFetching: getIsFetching(state),
//       followingInProgress: getFollowingInProgress(state)
//   };
// };


// export default connect(mapStateToProps, {
//   followingProgress: followingInProgressActionCreator,
//   getUsersThunkCreator: getUsersThunkCreator,
//   getPageThunkCreator: getPageThunkCreator,
//   UnFollowThunkCreator: UnFollowThunkCreator,
//   followThunkActionCreator: followThunkActionCreator
// })(UserC);
