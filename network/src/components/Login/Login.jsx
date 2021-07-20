import React from "react";
import { Field, reduxForm } from "redux-form";
import {requiredFields, minLengthThunkCreator , maxLengthThunkCreator} from "../../validators/validators";
import {LoginInputArea} from '../Common/FormsControl/formsConrols';
import {PasswordInputArea} from '../Common/FormsControl/formsConrols';

let minLength = minLengthThunkCreator(3);
let maxLength = maxLengthThunkCreator(10);


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
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

export default Login;