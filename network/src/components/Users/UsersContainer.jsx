import { connect } from "react-redux";
import {FollowActionCreator} from '../redux/UserReducer';
import {UnFollowActionCreator} from '../redux/UserReducer';
import {setUserActionCreator} from '../redux/UserReducer';
import {setCurrentPageActionCreator} from '../redux/UserReducer';
import {setTotalActionCreator} from '../redux/UserReducer';
import {ToggleActionCreator} from '../redux/UserReducer';
import MainUsersComponent from './MainUsersComponent';
import React from "react";
import "../../styles/Users.css";
import * as axios from "axios";
import Preloader from "../Common/Preloader";

class UserC extends React.Component {

  componentDidMount() {
    this.props.toogle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogle(false);
        this.props.setUsers(response.data.items);
        this.props.setTotal(response.data.totalCount);
      });
  }
  getPage = (pg) => {
    this.props.setPage(pg);
    this.props.toogle(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pg}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toogle(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
  
    return (<> 
    {this.props.isFetching ? <Preloader/> : null}
      <MainUsersComponent totalUsersCount = {this.props.totalUsersCount} 
      pageSize = {this.props.pageSize} currentPage = {this.props.currentPage}
      getPage = {this.getPage} users = {this.props.users}
      Follow = {this.props.Follow} Unfollow = {this.props.Unfollow}/> </>);}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
 
    };
  };


export default connect(mapStateToProps, {
  Follow: FollowActionCreator,
  Unfollow:UnFollowActionCreator,
  setUsers: setUserActionCreator,
  setPage: setCurrentPageActionCreator,
  setTotal: setTotalActionCreator,
  toogle: ToggleActionCreator
})(UserC);
