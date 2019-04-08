import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let {messages,dialogs, newMessageText} = props.dialogsPage;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
        }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = messages.map(m => <Message message={m.message}/>);


    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}

            </div>

            <div>
                <textarea onChange={onMessageChange} ref = {newMessageElement} value={newMessageText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add Message</button>

            </div>
        </div>
    )
};

export default Dialogs;