import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {requiredFields, minLengthThunkCreator , maxLengthThunkCreator} from "../../validators/validators";
import {LoginInputArea} from '../Common/FormsControl/formsConrols';
import {PasswordInputArea} from '../Common/FormsControl/formsConrols';
import {loginDataThunkCreator} from '../redux/auth-reducer';
import {logoutThunkCreator} from '../redux/auth-reducer';
import { Redirect } from 'react-router';
import '../Common/FormsControl/formsControls.css';
 


let minLength = minLengthThunkCreator(3);
let maxLength = maxLengthThunkCreator(30);


let LoginForm = (props) => {
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={"login"} component = {LoginInputArea}
                    validate = {[requiredFields,maxLength,minLength]}/>
                </div>
                <div>
                <Field placeholder={'Password'} name={"password"} component = {PasswordInputArea}
                validate = {[requiredFields, minLength, maxLength]}/>
                </div>
                <div>
                <Field type={'checkbox'} name={"rememberMe"} component = {"input"}/>Remember me?
                </div>
                <br />
                <div>
                    {props.error ? <span className='error'>{props.error}</span> : ''}

                </div>
                <br />
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

let LoginReduxForm = reduxForm( {
    form: 'login'
})(LoginForm)



let Login = (props) => {
    const onSubmit = (formData) => {
        props.loginDataThunkCreator(formData.login, formData.password, formData.rememberMe);
        console.log(formData)
    }
    
    if (props.isAuth) {
        return <Redirect to={'/profile'} />

    }

    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.authPart.isAuth
})

export default connect(mapStateToProps,{loginDataThunkCreator:loginDataThunkCreator, logoutThunkCreator:logoutThunkCreator })(Login);