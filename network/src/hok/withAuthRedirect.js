import React from "react"
import { Redirect } from "react-router"
import { connect } from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    auth: state.authPart.isAuth  
  });


export const withAuthRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {
            // if (!this.props.auth) {
            //     return <Redirect to = '/login'/>
            //   }
            return <Component {...this.props}/>
        }
    }
    let connectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(redirectComponent);
    
    return connectedAuthRedirectComponent;

}



