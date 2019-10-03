import React from 'react';
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50= maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Enter your message"}
                       name={'newMessageBody'}
                       component={Textarea}
                       validate={[required, maxLength50]}/>
            </div>

            <button>Send</button>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)