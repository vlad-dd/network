import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setDataThunkCreator } from "../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setDataThunkCreator();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  login: state.authPart.login,
  isAuth: state.authPart.isAuth
});

export default connect(mapStateToProps, {setDataThunkCreator:setDataThunkCreator })(
  HeaderContainer
);
