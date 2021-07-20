import { Field, reduxForm } from "redux-form";
import { TextArea } from "../Common/FormsControl/formsConrols";
import { maxLengthThunkCreator, requiredFields } from "../../validators/validators";
import { minLengthThunkCreator } from "../../validators/validators";

let maxLength = maxLengthThunkCreator(100);
let minLength = minLengthThunkCreator(3)

const DialogsInputForm = (props) => {
    return (
        <div>
            <form onSubmit = {props.handleSubmit}>
                <div>
                <Field placeholder={'Enter your message'} name={'message'} component={TextArea}
                validate = {[requiredFields, maxLength, minLength]} />
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

let DialogsReduxForm = reduxForm( {
    form: 'message'
} )(DialogsInputForm);


let MainFieldComponent = (props) => {
    let onSubmit = (messageData) => {
        props.addNewDialog(messageData.message);
        console.log(messageData.message)
    }
    return (
        <div>
            <DialogsReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

export default MainFieldComponent;