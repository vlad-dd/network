import { Field, reduxForm } from "redux-form";
import { requiredFields } from "../../../validators/validators";
import { maxLengthThunkCreator } from "../../../validators/validators";
import { minLengthThunkCreator } from "../../../validators/validators";
import { TextArea } from "../../Common/FormsControl/formsConrols";

const max10Symbols = maxLengthThunkCreator(10);
const min3Symbol = minLengthThunkCreator(3)

const TextAreaForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Enter your text...'} name={'post'} component={TextArea}
          validate = {[requiredFields, max10Symbols, min3Symbol]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
      </form>
    </div>
  );
};
 
let PostReduxForm = reduxForm( {
    form: 'post'
} )(TextAreaForm)

let MainPostFormComponent = (props) => {
   let onSubmit = (postData) => {
     props.addPost(postData.post);
      console.log(postData.post)
    }
    return (
        <div>
            <PostReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

export default MainPostFormComponent;
