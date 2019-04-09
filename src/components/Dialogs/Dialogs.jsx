import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/state";



const Dialogs = (props) => {

    let {messages, dialogs} = props.dialogsPage;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageCreator());
        }
    let onMessageChange = () => {
        let messageText = newMessageElement.current.value;
        let action = updateNewMessageTextCreator(messageText);
        props.dispatch(action);
    }


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages.map(m => <Message message={m.message}/>);

    let newMessageText = newMessageText;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>

            </div>

            <div>
                <textarea onChange={onMessageChange}
                          ref = {newMessageElement}
                          value={props.newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add Message</button>

            </div>
        </div>
    )
};

export default Dialogs;