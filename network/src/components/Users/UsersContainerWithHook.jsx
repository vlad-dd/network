import { connect } from "react-redux";
import MainUsersComponent from './MainUsersComponent';
import React from "react";
import "../../styles/Users.css";
import Preloader from "../Common/Preloader";
import {followingInProgressActionCreator} from '../redux/UserReducer';
import {getUsersThunkCreator} from '../redux/UserReducer';
import {getPageThunkCreator} from '../redux/UserReducer';
import {UnFollowThunkCreator} from '../redux/UserReducer';
import {followThunkActionCreator} from '../redux/UserReducer';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../redux/UserSelector";
import { useEffect } from "react";

const UsersContainerWithHook = (props) => {
    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize)
    }, [])

  let getPage = (pg) => {
    props.getPageThunkCreator(pg, props.pageSize);
  };
    return (<> 
    {props.isFetching ? <Preloader/> : null}
      <MainUsersComponent totalUsersCount = {props.totalUsersCount} 
      pageSize = {props.pageSize} currentPage = {props.currentPage}
      getPage = {getPage} users = {props.users}
      followingInProgress = {props.followingInProgress}
      UnFollowThunkCreator = {props.UnFollowThunkCreator} followThunkActionCreator = {props.followThunkActionCreator}/> </>);}


let mapStateToProps = (state) => {
  return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
  };
};


export default connect(mapStateToProps, {
  followingProgress: followingInProgressActionCreator,
  getUsersThunkCreator: getUsersThunkCreator,
  getPageThunkCreator: getPageThunkCreator,
  UnFollowThunkCreator: UnFollowThunkCreator,
  followThunkActionCreator: followThunkActionCreator
})(UsersContainerWithHook);
